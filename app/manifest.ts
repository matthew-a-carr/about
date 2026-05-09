import type { MetadataRoute } from 'next';
import { profile } from './content';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: profile.name,
    description: profile.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f6f1e8',
    theme_color: '#f6f1e8',
    icons: [
      {
        src: '/icon',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
