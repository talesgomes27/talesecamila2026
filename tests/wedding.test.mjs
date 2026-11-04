import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { weddingData, calendarLinks } from '../src/data/weddingData.ts';
import { generatePixPayload } from '../src/utils/pix.ts';
import { buildSocialMetadata } from '../src/utils/socialMetadata.ts';

const preserved = JSON.parse(readFileSync(new URL('./preserved-data.json', import.meta.url)));
const hash = value => createHash('sha256').update(JSON.stringify(value)).digest('hex');

test('the entire gift catalog, financial configuration and fixed payloads remain unchanged', () => {
  assert.equal(hash(weddingData.gifts), preserved.catalog);
  assert.equal(hash(weddingData.pix), preserved.pix);
  assert.equal(hash(weddingData.gifts.map(gift => generatePixPayload({
    key: weddingData.pix.key, recipientName: weddingData.pix.recipientName,
    city: weddingData.pix.city, amount: gift.price, txid: `GIFT${gift.id}`,
  }))), preserved.payloads);
});

test('arrival, ceremony and RSVP deadline are explicit and chronologically consistent', () => {
  assert.equal(weddingData.ceremony.arrivalTime, '16h30');
  assert.equal(weddingData.ceremony.ceremonyTime, '17h');
  assert.equal(weddingData.rsvp.deadlineDate, '2026-12-04');
  assert.ok(Date.parse(`${weddingData.rsvp.deadlineDate}T23:59:59-03:00`) < Date.parse(weddingData.weddingDate));
  assert.equal(new Date(weddingData.weddingDate).toISOString(), '2026-12-19T19:30:00.000Z');
});

test('calendar exports remember the date and describe the schedule without a fixed closing time', () => {
  const google = new URL(calendarLinks.googleUrl);
  const ics = decodeURIComponent(calendarLinks.icsDataUri.split(',')[1]);
  assert.equal(google.searchParams.get('dates'), '20261219/20261220');
  assert.ok(ics.includes('DTSTART;VALUE=DATE:20261219'));
  assert.ok(!ics.includes('DTEND:') && !ics.includes('DURATION:'));
  for (const description of [google.searchParams.get('details'), ics]) {
    assert.ok(description.includes('16h30') && description.includes('17h'));
    assert.ok(description.includes('Sem horário definido para terminar'));
  }
  assert.equal(hash([weddingData.ceremony.mapsUrl, weddingData.ceremony.wazeUrl]), preserved.maps);
});

test('event metadata keeps the start but makes no claim about the ending', () => {
  const event = JSON.parse(buildSocialMetadata({ title: 'Casamento', description: 'Convite', path: '/' }).jsonLd);
  assert.equal(event.startDate, '2026-12-19T16:30:00-03:00');
  assert.equal(Object.hasOwn(event, 'endDate'), false);
});
