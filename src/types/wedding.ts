export interface CoupleInfo {
  groom: string;
  bride: string;
  names: string;
  displayDate: string;
  heroSubtitle: string;
  heroPhoto: string;
}

export interface GalleryPhoto {
  url: string;
  caption: string;
}

export interface CoupleStory {
  title: string;
  subtitle: string;
  groomName: string;
  groomPhoto: string;
  brideName: string;
  bridePhoto: string;
  text: string;
  gallery: GalleryPhoto[];
}

export interface CeremonyInfo {
  title: string;
  venueName: string;
  venuePhoto: string;
  dateFormatted: string;
  time: string;
  notes: string;
  address: string;
  mapsEmbedUrl: string;
  mapsUrl: string;
  wazeUrl: string;
}

export interface PixConfig {
  key: string;
  recipientName: string;
  bank: string;
  city: string;
  whatsappNumber: string;
}

export interface GiftItem {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface RsvpConfig {
  title: string;
  subtitle: string;
  deadlineText: string;
  mode: 'netlify' | 'google_forms';
  googleFormsUrl?: string;
}

export interface MetaConfig {
  siteUrl: string;
  ogImage: string;
  description: string;
}

export interface WeddingData {
  couple: CoupleInfo;
  weddingDate: string; // Formato ISO 8601: "YYYY-MM-DDTHH:MM:SS"
  story: CoupleStory;
  ceremony: CeremonyInfo;
  pix: PixConfig;
  gifts: GiftItem[];
  rsvp: RsvpConfig;
  meta: MetaConfig;
}
