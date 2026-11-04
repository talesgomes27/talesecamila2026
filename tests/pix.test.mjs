import test from 'node:test';
import assert from 'node:assert/strict';
import { generatePixPayload, calculateCRC16 } from '../src/utils/pix.ts';

const synthetic = { key: '123e4567-e89b-42d3-a456-426614174000', recipientName: 'Pessoa de Teste', city: 'BELEM', txid: 'TESTE01' };

function fields(payload) {
  const result = new Map();
  for (let i = 0; i < payload.length;) {
    const id = payload.slice(i, i + 2);
    const length = Number(payload.slice(i + 2, i + 4));
    assert.ok(Number.isInteger(length) && length >= 0);
    assert.equal(payload.slice(i + 4, i + 4 + length).length, length);
    result.set(id, payload.slice(i + 4, i + 4 + length));
    i += 4 + length;
    assert.ok(i <= payload.length);
  }
  return result;
}

test('CRC matches the independent CCITT-FALSE check vector', () => {
  assert.equal(calculateCRC16('123456789'), '29B1');
});

test('fixed amount produces BRL cents and a complete nested TLV payload', () => {
  const payload = generatePixPayload({ ...synthetic, amount: 120.50 });
  const parsed = fields(payload);
  assert.equal(parsed.get('54'), '120.50');
  assert.equal(parsed.get('53'), '986');
  assert.equal(fields(parsed.get('26')).get('01'), synthetic.key);
  assert.equal(fields(parsed.get('62')).get('05'), 'TESTE01');
});

test('free amount omits the amount field without imposing a minimum', () => {
  assert.equal(fields(generatePixPayload(synthetic)).has('54'), false);
});

test('complete synthetic payloads match independently checked CRC vectors', () => {
  const vector = { key: '123e4567-e12b-12d1-a456-426655440000', recipientName: 'PESSOA TESTE', city: 'BELEM' };
  assert.equal(generatePixPayload(vector).slice(-4), 'DC94');
  assert.equal(generatePixPayload({ ...vector, amount: 123.45, txid: 'TESTE1' }).slice(-4), '392B');
  assert.equal(fields(generatePixPayload({ ...vector, amount: 0.01 })).get('54'), '0.01');
});

test('accented names normalize to ASCII while preserving field limits', () => {
  const parsed = fields(generatePixPayload({ ...synthetic, recipientName: 'Pessoa Sintética de Testes Muito Longa', city: 'São Miguel do Guamá' }));
  assert.equal(parsed.get('59'), 'PESSOA SINTETICA DE TESTE');
  assert.equal(parsed.get('60'), 'SAO MIGUEL DO G');
});

for (const amount of [0, -1, NaN, Infinity, 1.001, 1e21, 10000000000]) {
  test(`invalid or fractional-cent amount ${amount} is rejected`, () => {
    assert.throws(() => generatePixPayload({ ...synthetic, amount }));
  });
}

test('oversized key cannot corrupt a two-digit TLV length', () => {
  assert.throws(() => generatePixPayload({ ...synthetic, key: 'x'.repeat(100) }));
});

test('non-ASCII key cannot produce mismatched byte lengths', () => {
  assert.throws(() => generatePixPayload({ ...synthetic, key: 'chave💚' }));
});

for (const txid of ['AB-CD', 'A'.repeat(26)]) {
  test('invalid transaction identifier is rejected instead of silently changed', () => {
    assert.throws(() => generatePixPayload({ ...synthetic, txid }));
  });
}
