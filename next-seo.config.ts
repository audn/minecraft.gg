import { NextSeoProps } from 'next-seo';

export default {
  title: 'Minecraft User Lookup | minecraft.gg',
  description: 'minecraft.gg',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.minecraft.gg',
    site_name: 'minecraft.gg',
    images: [
      {
        url: '/steve.png',
        width: 400,
        height: 400,
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
