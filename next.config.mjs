/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    // Map proxy-mode demos to paths under /demos/<slug>.
    // Add entries here for each proxy-mode demo:
    // Example:
    //   { source: '/demos/image-tools/:path*', destination: `${process.env.DEMO_IMAGE_TOOLS_URL}/:path*` },
    //   { source: '/demos/ai-notes/:path*', destination: `${process.env.DEMO_AI_NOTES_URL}/:path*` },
    const rules = [];

    if (process.env.DEMO_IMAGE_TOOLS_URL) {
      rules.push({
        source: '/demos/image-tools/:path*',
        destination: `${process.env.DEMO_IMAGE_TOOLS_URL}/:path*`
      });
    }
    if (process.env.DEMO_AI_NOTES_URL) {
      rules.push({
        source: '/demos/ai-notes/:path*',
        destination: `${process.env.DEMO_AI_NOTES_URL}/:path*`
      });
    }
    return rules;
  },
  reactStrictMode: true
};

export default nextConfig;
