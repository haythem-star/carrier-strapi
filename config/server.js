module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'b7b6ae82bf9a4cbe8a47d8b0ff6b9246'),
    },
  },
});
