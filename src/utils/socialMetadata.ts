import { weddingData } from '../data/weddingData';

export interface SocialMetadataInput {
  title: string;
  ogTitle?: string;
  description: string;
  ogDescription?: string;
  path: string;
  siteOrigin?: string | URL;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  siteName?: string;
}

export interface SocialMetadataOutput {
  title: string;
  description: string;
  canonicalUrl: string;
  openGraph: {
    type: 'website';
    locale: 'pt_BR';
    url: string;
    title: string;
    description: string;
    siteName: string;
    image: {
      url: string;
      secureUrl: string;
      type: string;
      width: number;
      height: number;
      alt: string;
    };
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  jsonLd: string;
}

export function buildSocialMetadata({
  title,
  ogTitle,
  description,
  ogDescription,
  path,
  siteOrigin,
  image = weddingData.meta.ogImage,
  imageAlt = `Convite de Casamento de ${weddingData.couple.names} — 19.12.2026 às ${weddingData.ceremony.time}`,
  imageWidth = 1200,
  imageHeight = 630,
  siteName = `Casamento ${weddingData.couple.names}`,
}: SocialMetadataInput): SocialMetadataOutput {
  const baseUrl = String(siteOrigin || weddingData.meta.siteUrl).replace(/\/$/, '');
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  const canonicalUrl = new URL(normalizedPath, `${baseUrl}/`).href;
  const imageUrl = image.startsWith('http')
    ? image
    : new URL(image.startsWith('/') ? image : `/${image}`, `${baseUrl}/`).href;

  const cleanExt = imageUrl.split('?')[0].split('.').pop()?.toLowerCase() || 'jpg';
  const mimeMap: Record<string, string> = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    webp: 'image/webp',
  };
  const imageType = mimeMap[cleanExt] || 'image/jpeg';

  const resolvedOgTitle = ogTitle || title;
  const resolvedOgDesc = ogDescription || description;

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SocialEvent',
    name: `Casamento de ${weddingData.couple.names}`,
    description: resolvedOgDesc,
    startDate: `${weddingData.weddingDate}-03:00`,
    endDate: '2026-12-19T23:00:00-03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    url: canonicalUrl,
    image: [imageUrl],
    location: {
      '@type': 'Place',
      name: weddingData.ceremony.venueName,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Lauro Sodré, 187',
        addressLocality: 'São Miguel do Guamá',
        addressRegion: 'PA',
        postalCode: '68660-000',
        addressCountry: 'BR',
      },
    },
    organizer: {
      '@type': 'Person',
      name: weddingData.couple.names,
    },
  };

  return {
    title,
    description,
    canonicalUrl,
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: canonicalUrl,
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      siteName,
      image: {
        url: imageUrl,
        secureUrl: imageUrl,
        type: imageType,
        width: imageWidth,
        height: imageHeight,
        alt: imageAlt,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedOgTitle,
      description: resolvedOgDesc,
      image: imageUrl,
      imageAlt,
    },
    jsonLd: JSON.stringify(eventSchema),
  };
}
