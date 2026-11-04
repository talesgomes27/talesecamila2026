import type { GiftItem } from '../types/wedding';

export function orderGifts(gifts: GiftItem[]): GiftItem[] {
  const opening = [6, 4, 5, 19, 7, 9, 17];
  const special = [10, 15, 3, 2, 1];
  return [
    ...opening.flatMap(id => gifts.filter(gift => gift.id === id)),
    ...gifts.filter(gift => !opening.includes(gift.id) && !special.includes(gift.id)),
    ...special.flatMap(id => gifts.filter(gift => gift.id === id)),
  ];
}
