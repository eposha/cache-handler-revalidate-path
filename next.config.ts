import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0, // disable default in-memory caching

  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return crypto.randomUUID();
  },
};

export default nextConfig;
