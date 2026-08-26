/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Yahan wahi exact naam likhna hai jo aapke PDF ka public folder mein hai
        source: '/Menoessence-Client-Onboarding-Form.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Menoessence-Client-Onboarding-Form.pdf"',
          },
          {
            key: 'Content-Type',
            value: 'application/pdf',
          }
        ],
      },
    ];
  },
};

module.exports = nextConfig;