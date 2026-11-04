import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

test('expanding gifts moves keyboard focus into the newly revealed group', () => {
  const source = readFileSync(new URL('../src/components/home/GiftsSection.astro', import.meta.url), 'utf8');
  const script = ts.transpileModule(source.match(/<script>([\s\S]*?)<\/script>/)[1], { compilerOptions: { target: ts.ScriptTarget.ES2022 } }).outputText;
  const cards = Array.from({ length: 24 }, () => {
    const classes = new Set();
    const button = { focused: false, removeAttribute() {}, focus() { this.focused = true; } };
    return { dataset: {}, button, querySelector: () => button, classList: { add: c => classes.add(c), remove: c => classes.delete(c), contains: c => classes.has(c) } };
  });
  let expand;
  const nodes = {
    'gifts-grid': { querySelectorAll: () => cards, addEventListener() {} },
    'gifts-load-more-btn': { addEventListener: (_, handler) => { expand = handler; } },
    'gifts-load-more-container': { classList: { add() {}, remove() {} } },
    'gifts-load-more-count': { textContent: '' },
  };
  runInNewContext(script, { document: { getElementById: id => nodes[id] ?? null }, window: { matchMedia: () => ({ matches: true }) } });
  assert.equal(cards[9].classList.contains('hidden'), true);
  expand();
  assert.equal(cards[9].classList.contains('hidden'), false);
  assert.equal(cards[9].button.focused, true);
});
