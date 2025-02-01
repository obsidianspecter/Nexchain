const nextConfig = {
    webpack: (config, { dev }) => {
      if (dev) {
        config.cache = false; // ✅ Disables Webpack cache in dev mode
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  