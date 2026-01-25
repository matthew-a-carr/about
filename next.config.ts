import type { NextConfig } from 'next';

// https://vercel.com/docs/projects/environment-variables/system-environment-variables#vercel
const isVercelRuntime = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_VERCEL_OBSERVABILITY_BASEPATH: isVercelRuntime
      ? '/_vercel'
      : '/observability',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/76042279**',
      },
    ],
  },
};

export default nextConfig;
