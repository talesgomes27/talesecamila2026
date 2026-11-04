import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = readFileSync(new URL('../src/components/home/RsvpSection.astro', import.meta.url), 'utf8');
const script = ts.transpileModule(source.match(/<script>([\s\S]*?)<\/script>/)[1], {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
}).outputText;

function setup({ savedName = '', fetchImpl, age = 2000, name = 'Convidado Sintético', message = 'Teste local', sheetsUrl = '', bot = false } = {}) {
  const elements = new Map();
  const calls = [];
  const toasts = [];
  const timeouts = [];
  let now = 0;
  const element = (id) => {
    if (!elements.has(id)) {
      const classes = new Set(id.includes('message') ? ['hidden'] : []);
      elements.set(id, {
        id, value: '', disabled: false, textContent: '', href: '',
        dataset: { sheetsUrl, whatsappPhone: '5500000000000' },
        handlers: {},
        classList: { add: c => classes.add(c), remove: c => classes.delete(c), contains: c => classes.has(c) },
        addEventListener(type, handler) { this.handlers[type] = handler; },
        focus() {}, reset() {},
      });
    }
    return elements.get(id);
  };
  class SyntheticFormData extends FormData {
    constructor() { super(); this.set('name', name); this.set('message', message); if (bot) this.set('botcheck', 'on'); }
  }
  const storage = new Map([['rsvp_submitted', savedName]]);
  runInNewContext(script, {
    document: { getElementById: element },
    window: { matchMedia: () => ({ matches: true }), dispatchEvent: e => toasts.push(e.detail.message) },
    navigator: {}, sessionStorage: { getItem: k => storage.get(k) ?? null, setItem: (k,v) => storage.set(k,v) },
    FormData: SyntheticFormData, URLSearchParams, AbortController,
    Date: class extends Date { static now() { return now; } },
    CustomEvent: class { constructor(type, init) { this.type = type; this.detail = init.detail; } },
    fetch: async (...args) => { calls.push(args); return fetchImpl ? fetchImpl(...args) : new Response('{"success":true}'); },
    setTimeout: (callback, delay) => { if (delay >= 10000) timeouts.push(callback); return 1; },
    clearTimeout() {}, console: { warn() {} },
  });
  now = age;
  return { element, calls, toasts, timeouts, submit: () => element('rsvp-form').handlers.submit({ preventDefault() {} }) };
}

test('a previous name in browser memory never substitutes a new submission', async () => {
  const page = setup({ savedName: 'convidado sintético' });
  await page.submit();
  assert.equal(page.calls.length, 1);
});

test('a fast human submission is not silently discarded', async () => {
  const page = setup({ age: 100 });
  await page.submit();
  assert.equal(page.calls.length, 1);
});

test('a valid Web3Forms acceptance shows the sent state', async () => {
  const page = setup();
  await page.submit();
  assert.equal(page.element('rsvp-success-message').classList.contains('hidden'), false);
  assert.equal(page.toasts.some(message => /presença confirmada/i.test(message)), false);
});

for (const [name, response] of [
  ['HTTP error', () => new Response('{"success":true}', { status: 500 })],
  ['service refusal', () => new Response('{"success":false}')],
  ['malformed response', () => new Response('not JSON')],
  ['non-boolean success', () => new Response('{"success":"false"}')],
]) {
  test(`${name} keeps success hidden and offers recovery`, async () => {
    const page = setup({ fetchImpl: response });
    await page.submit();
    assert.equal(page.element('rsvp-success-message').classList.contains('hidden'), true);
    assert.equal(page.element('rsvp-error-message').classList.contains('hidden'), false);
    assert.equal(page.element('rsvp-submit-btn').disabled, false);
  });
}

test('repeated taps while waiting produce only one request', async () => {
  let finish;
  const page = setup({ fetchImpl: () => new Promise(resolve => { finish = resolve; }) });
  const pending = page.submit();
  const repeated = page.submit();
  assert.equal(page.calls.length, 1);
  finish(new Response('{"success":true}'));
  await Promise.all([pending, repeated]);
});

test('a stalled request is cancelled and returns an actionable uncertain state', async () => {
  const page = setup({ fetchImpl: (_, options) => new Promise((resolve, reject) => {
    options.signal?.addEventListener('abort', () => reject(new Error('Timed out')));
  }) });
  const pending = page.submit();
  assert.equal(page.timeouts.length > 0, true);
  page.timeouts.forEach(callback => callback());
  await pending;
  assert.equal(page.element('rsvp-error-message').classList.contains('hidden'), false);
  assert.equal(page.element('rsvp-submit-btn').disabled, false);
});

for (const name of ['  ', 'ab', 'x'.repeat(101)]) {
  test('invalid names cannot be submitted', async () => {
    const page = setup({ name });
    await page.submit();
    assert.equal(page.calls.length, 0);
    assert.equal(page.element('rsvp-success-message').classList.contains('hidden'), true);
    assert.ok(page.toasts.length > 0);
  });
}

test('only Web3Forms receives the normalized adult name and children message', async () => {
  const page = setup({ name: '  Pessoa   Sintética  ', message: ' Levarei 2 crianças.  ', sheetsUrl: 'https://example.invalid/removed-sheet' });
  await page.submit();
  assert.equal(page.calls.length, 1);
  assert.equal(page.calls[0][0], 'https://api.web3forms.com/submit');
  assert.equal(page.calls[0][1].body.get('name'), 'Pessoa Sintética');
  assert.equal(page.calls[0][1].body.get('message'), 'Levarei 2 crianças.');
});

test('honeypot is preserved without presenting success', async () => {
  const page = setup({ bot: true });
  await page.submit();
  assert.equal(page.calls.length, 0);
  assert.equal(page.element('rsvp-success-message').classList.contains('hidden'), true);
});

test('a failed Web3Forms request offers recovery without contacting another service', async () => {
  const page = setup({ sheetsUrl: 'https://example.invalid/synthetic-sheet', fetchImpl: url => {
    if (!String(url).includes('example.invalid')) throw new Error('Primary rejected');
    return new Promise(() => {});
  } });
  const pending = page.submit();
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(page.calls.length, 1);
  assert.equal(page.element('rsvp-submit-btn').disabled, false);
  assert.equal(page.element('rsvp-error-message').classList.contains('hidden'), false);
  await pending;
});
