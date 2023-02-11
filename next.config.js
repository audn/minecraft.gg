module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/GPA4aFr',
        permanent: true,
      },
    ];
  },
};
