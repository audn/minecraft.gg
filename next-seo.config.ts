import { NextSeoProps } from 'next-seo';

export default {
  title: 'Minecraft User Lookup | minecraft.gg',
  description: 'Discover and explore Minecraft player skins.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.minecraft.gg',
    site_name: 'minecraft.gg',
    images: [
      {
        url: 'https://www.minecraft.gg/steve.png',
        width: 96,
        height: 96,
        alt: '',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    handle: '@tweetaudun',
    site: '@tweetaudun',
    cardType: 'summary',
  },
} as NextSeoProps;
