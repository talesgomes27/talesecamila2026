import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/components/home/PixModal.astro', import.meta.url), 'utf8');
const script = ts.transpileModule(source.match(/<script>([\s\S]*?)<\/script>/)[1], {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText;

function setup({ rejectCopy = false, copyImpl } = {}) {
  const elements = new Map();
  const handlers = {};
  const timers = [];
  const opened = [];
  const copied = [];
  const element = id => {
    if (!elements.has(id)) elements.set(id, {
      id, value: '', textContent: '', src: '', handlers: {}, open: false, focused: false,
      dataset: { pixKey: 'SYNTHETIC_KEY', pixWhatsapp: '5500000000000', coupleNames: 'Casal de Teste' },
      classList: { add() {}, remove() {}, replace() {} },
      addEventListener(type, handler) { this.handlers[type] = handler; },
      showModal() { this.open = true; },
      close() { this.open = false; this.handlers.close?.(); },
      focus() { this.focused = true; },
      select() { this.selected = true; },
      closest() { return { setAttribute: () => { this.manualCopyVisible = true; } }; },
    });
    return elements.get(id);
  };
  runInNewContext(script, {
    document: { getElementById: element, activeElement: element('trigger') },
    window: { requestIdleCallback() {}, addEventListener: (type, handler) => { handlers[type] = handler; }, dispatchEvent() {}, open: url => opened.push(url) },
    navigator: { clipboard: { writeText: async text => { if (rejectCopy) throw new Error('Denied'); if (copyImpl) await copyImpl(text); copied.push(text); } } },
    CustomEvent: class {}, setTimeout: fn => { timers.push(fn); return 1; }, Map, console,
  });
  const open = (detail = {}) => handlers['open-pix-modal']({ detail: {
    title: 'Presente de teste', priceFormatted: 'R$ 123,45', image: '/favicon.svg',
    pixCode: 'SYNTHETIC_PAYLOAD', triggerEl: element('trigger'), ...detail,
  } });
  return { element, timers, opened, copied, open };
}

test('copy feedback remains actionable after the button label returns to normal', async () => {
  const page = setup(); page.open();
  await page.element('pix-copy-btn').handlers.click();
  while (page.timers.length) page.timers.shift()();
  assert.deepEqual(page.copied, ['SYNTHETIC_PAYLOAD']);
  assert.match(page.element('pix-next-step').textContent, /banco.*Pix Copia e Cola/);
  assert.doesNotMatch(page.element('pix-next-step').textContent, /recebido|pagamento confirmado/i);
});

test('denied clipboard reveals and selects the manual copy alternative', async () => {
  const page = setup({ rejectCopy: true }); page.open();
  await page.element('pix-copy-btn').handlers.click();
  assert.equal(page.element('pix-copy-input').manualCopyVisible, true);
  assert.equal(page.element('pix-copy-input').selected, true);
  assert.match(page.element('pix-next-step').textContent, /copiar.*ajuda/i);
});

test('closing the dialog restores focus to its actual trigger', () => {
  const page = setup(); page.open();
  assert.equal(page.element('pix-copy-btn').focused, true);
  page.element('pix-modal-close').handlers.click();
  assert.equal(page.element('trigger').focused, true);
});

test('a failed QR module leaves copying available with a recovery explanation', async () => {
  const page = setup(); page.open();
  await new Promise(resolve => setImmediate(resolve));
  assert.match(page.element('pix-qr-status').textContent, /Não foi possível.*Copiar código Pix/);
  assert.equal(page.element('pix-copy-input').value, 'SYNTHETIC_PAYLOAD');
});

test('fixed and free gift messages never claim a payment was made', () => {
  const page = setup();
  for (const isFreeAmount of [false, true]) {
    page.open({ isFreeAmount });
    page.element('pix-send-whatsapp-btn').handlers.click();
  }
  for (const url of page.opened) {
    const text = new URL(url).searchParams.get('text');
    assert.doesNotMatch(text, /acabei de enviar|já paguei|pagamento recebido/i);
    assert.match(text, /recado/i);
  }
});

test('a late copy from a previous dialog cannot announce success for the new gift', async () => {
  let finishCopy;
  const page = setup({ copyImpl: () => new Promise(resolve => { finishCopy = resolve; }) });
  page.open({ pixCode: 'SYNTHETIC_A' });
  const pending = page.element('pix-copy-btn').handlers.click();
  page.element('pix-modal-close').handlers.click();
  page.open({ pixCode: 'SYNTHETIC_B' });
  finishCopy(); await pending;
  assert.doesNotMatch(page.element('pix-next-step').textContent, /Código copiado/);
  assert.equal(page.element('pix-copy-input').value, 'SYNTHETIC_B');
});

test('a previous label-reset timer cannot overwrite the new dialog state', async () => {
  const page = setup(); page.open();
  await page.element('pix-copy-btn').handlers.click();
  page.element('pix-modal-close').handlers.click();
  page.open({ pixCode: 'SYNTHETIC_B' });
  page.element('pix-copy-btn-content').textContent = 'Estado atual';
  while (page.timers.length) page.timers.shift()();
  assert.equal(page.element('pix-copy-btn-content').textContent, 'Estado atual');
});
