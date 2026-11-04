import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const home = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const invite = readFileSync(new URL('../dist/convite/index.html', import.meta.url), 'utf8');

test('the built home preserves the original section order requested by the user', () => {
  assert.deepEqual([...home.matchAll(/<section\s+id="([^"]+)"/g)].map(match => match[1]),
    ['hero', 'countdown-banner', 'casal', 'cerimonia', 'presentes', 'rsvp']);
});

test('the built form cannot submit natively before its client listener is ready', () => {
  const formTag = home.match(/<form\b[^>]*id="rsvp-form"[^>]*>/)[0];
  assert.match(formTag, /class="[^"]*\bhidden\b/);
  assert.match(formTag, /action="https:\/\/api\.web3forms\.com\/submit"/);
  assert.ok(home.includes('Ajuda para confirmar presença'));
});

test('privacy indexing and explicit arrival/ceremony survive both build routes', () => {
  for (const html of [home, invite]) {
    assert.match(html, /name="robots" content="noindex, nofollow"/);
    assert.ok(html.includes('16h30') && html.includes('17h'));
  }
  assert.ok(!invite.includes('Confirmar RSVP'));
});
