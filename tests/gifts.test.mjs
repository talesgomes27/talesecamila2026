import test from 'node:test';
import assert from 'node:assert/strict';
import { orderGifts } from '../src/utils/gifts.ts';

test('approved opening keeps all gift values and objects, with special contributions later', () => {
  const gifts = Array.from({ length: 24 }, (_, i) => ({ id: i + 1, price: (i + 1) * 10 }));
  const ordered = orderGifts(gifts);
  assert.deepEqual(ordered.slice(0, 7).map(gift => gift.id), [6, 4, 5, 19, 7, 9, 17]);
  assert.deepEqual(ordered.slice(-5).map(gift => gift.id), [10, 15, 3, 2, 1]);
  assert.equal(new Set(ordered.map(gift => gift.id)).size, 24);
  assert.ok(ordered.every(gift => gifts.includes(gift)));
  assert.equal(gifts[0].id, 1);
});

test('unknown future gifts are retained in their source order', () => {
  const gifts = [{ id: 999 }, { id: 5 }, { id: 1000 }];
  assert.deepEqual(orderGifts(gifts).map(gift => gift.id), [5, 999, 1000]);
});
