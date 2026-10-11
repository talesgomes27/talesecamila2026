import { z } from 'astro/zod';

export const CoupleInfoSchema = z.object({
  groom: z.string().trim().min(2, { message: "Nome do noivo deve ter pelo menos 2 caracteres" }),
  bride: z.string().trim().min(2, { message: "Nome da noiva deve ter pelo menos 2 caracteres" }),
  names: z.string().trim().min(3),
  displayDate: z.string().regex(/^\d{2}\s*\|\s*\d{2}\s*\|\s*\d{4}$/, {
    message: "displayDate deve seguir o formato 'DD | MM | AAAA'",
  }),
  heroSubtitle: z.string().trim().min(3),
  heroPhoto: z.string().startsWith('/assets/imagens/'),
});

export const GalleryPhotoSchema = z.object({
  url: z.string().startsWith('/assets/imagens/carrossel/'),
  caption: z.string().optional(),
});

export const CoupleStorySchema = z.object({
  title: z.string().trim().min(2),
  subtitle: z.string().trim().min(2),
  groomName: z.string().trim().min(2),
  groomPhoto: z.string().startsWith('/assets/imagens/'),
  brideName: z.string().trim().min(2),
  bridePhoto: z.string().startsWith('/assets/imagens/'),
  text: z.string().trim().min(20),
  gallery: z.array(GalleryPhotoSchema).min(1, { message: "A galeria deve conter ao menos 1 foto" }),
});

export const CeremonyInfoSchema = z.object({
  title: z.string().trim().min(3),
  venueName: z.string().trim().min(3),
  venuePhoto: z.string().startsWith('/assets/imagens/'),
  dateFormatted: z.string().trim().min(5),
  time: z.string().trim().min(3),
  notes: z.string().trim().min(10),
  address: z.string().trim().min(10),
  mapsEmbedUrl: z.string().url({ message: "mapsEmbedUrl deve ser uma URL válida" }),
  mapsUrl: z.string().url({ message: "mapsUrl deve ser uma URL válida" }),
  wazeUrl: z.string().url({ message: "wazeUrl deve ser uma URL válida" }),
});

export const PixConfigSchema = z.object({
  key: z.string().uuid({ message: "A chave PIX aleatória deve ser um UUID válido" }),
  recipientName: z.string().trim().min(3).max(50),
  bank: z.string().trim().min(2),
  city: z.string().trim().min(2).regex(/^[A-Z ]+$/, {
    message: "Cidade do PIX deve conter apenas letras maiúsculas sem acento (padrão EMVCo)",
  }),
  whatsappNumber: z.string().regex(/^55\d{10,11}$/, {
    message: "WhatsApp deve seguir o formato DDI+DDD+Número (ex.: 5591984611907)",
  }),
});

export const GiftItemSchema = z.object({
  id: z.number().int().positive(),
  title: z.string().trim().min(3).max(120),
  description: z.string().trim().min(10).max(300),
  price: z.number().positive({ message: "O preço do presente deve ser maior que zero" }),
  image: z.string().regex(/^\/assets\/imagens\/presentes\/[\w-]+\.(jpg|jpeg|png|webp)$/, {
    message: "Caminho de imagem de presente inválido",
  }),
});

export const RsvpConfigSchema = z.object({
  title: z.string().trim().min(3),
  subtitle: z.string().trim().min(3),
  deadlineText: z.string().trim().min(5),
});

export const MetaConfigSchema = z.object({
  siteUrl: z.string().url({ message: "siteUrl deve ser uma URL válida" }),
  ogImage: z.string().startsWith('/'),
  description: z.string().trim().min(10).max(300),
});

export const WeddingDataSchema = z.object({
  couple: CoupleInfoSchema,
  weddingDate: z.string().refine((val) => !Number.isNaN(Date.parse(val)), {
    message: "weddingDate deve ser uma data ISO 8601 válida (YYYY-MM-DDTHH:MM:SS)",
  }),
  story: CoupleStorySchema,
  ceremony: CeremonyInfoSchema,
  pix: PixConfigSchema,
  gifts: z.array(GiftItemSchema).min(1).refine(
    (gifts) => new Set(gifts.map((g) => g.id)).size === gifts.length,
    { message: "A lista de presentes não pode conter IDs duplicados" }
  ),
  rsvp: RsvpConfigSchema,
  meta: MetaConfigSchema,
});

export type CoupleInfo = z.infer<typeof CoupleInfoSchema>;
export type GalleryPhoto = z.infer<typeof GalleryPhotoSchema>;
export type CoupleStory = z.infer<typeof CoupleStorySchema>;
export type CeremonyInfo = z.infer<typeof CeremonyInfoSchema>;
export type PixConfig = z.infer<typeof PixConfigSchema>;
export type GiftItem = z.infer<typeof GiftItemSchema>;
export type RsvpConfig = z.infer<typeof RsvpConfigSchema>;
export type MetaConfig = z.infer<typeof MetaConfigSchema>;
export type WeddingData = z.infer<typeof WeddingDataSchema>;

