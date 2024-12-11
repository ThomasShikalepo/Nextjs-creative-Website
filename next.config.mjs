/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/(.*)',  // Matches any path
          destination: '/', // Redirects to the home page
        },
      ];
    },
  };
  
  export default nextConfig;
  