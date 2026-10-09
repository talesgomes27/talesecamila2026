export interface PixPayloadParams {
  key: string;
  recipientName: string;
  city?: string;
  amount?: number;
  txid?: string;
}

function formatField(id: string, value: string): string {
  const len = String(value.length).padStart(2, '0');
  return `${id}${len}${value}`;
}

function normalizeText(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase();
}

/**
 * Cálculo do CRC16-CCITT (0xFFFF, Polinômio 0x1021)
 */
export function calculateCRC16(payload: string): string {
  let crc = 0xFFFF;
  const polynomial = 0x1021;

  for (let i = 0; i < payload.length; i++) {
    crc ^= (payload.charCodeAt(i) << 8);
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ polynomial) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, '0');
}

/**
 * Gera a string oficial do PIX Copia e Cola (Padrão EMVCo / Banco Central do Brasil)
 */
export function generatePixPayload({ key, recipientName, city = 'SAO MIGUEL DO GUAMA', amount, txid = '***' }: PixPayloadParams): string {
  const normKey = key.trim();
  const normName = normalizeText(recipientName || 'CASAMENTO').slice(0, 25);
  const normCity = normalizeText(city || 'SAO MIGUEL DO GUAMA').slice(0, 15);
  const normTxid = (txid || '***').replace(/[^a-zA-Z0-9]/g, '').slice(0, 25) || '***';

  let payload = '';

  // 00 - Payload Format Indicator
  payload += formatField('00', '01');

  // 26 - Merchant Account Information (PIX)
  let merchantInfo = formatField('00', 'br.gov.bcb.pix');
  merchantInfo += formatField('01', normKey);
  payload += formatField('26', merchantInfo);

  // 52 - Merchant Category Code
  payload += formatField('52', '0000');

  // 53 - Transaction Currency (986 = BRL)
  payload += formatField('53', '986');

  // 54 - Transaction Amount
  if (amount && Number(amount) > 0) {
    const formattedAmount = Number(amount).toFixed(2);
    payload += formatField('54', formattedAmount);
  }

  // 58 - Country Code
  payload += formatField('58', 'BR');

  // 59 - Merchant Name
  payload += formatField('59', normName);

  // 60 - Merchant City
  payload += formatField('60', normCity);

  // 62 - Additional Data Field Template (TxID)
  const additionalData = formatField('05', normTxid);
  payload += formatField('62', additionalData);

  // 63 - CRC16 (Calculado sobre toda a string incluindo '6304')
  payload += '6304';
  const crc = calculateCRC16(payload);

  return payload + crc;
}
