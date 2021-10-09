module.exports = ({ env }) => ({
    email: {
      provider: 'smtp',
      providerOptions: {
        host: 'smtp.gmail.com', //SMTP Host
        port: 465   , //SMTP Port
        secure: true,
        username: 'mncsgo19@gmail.com',
        password: 'marcin4455',
        rejectUnauthorized: true,
        requireTLS: true,
        connectionTimeout: 1,
      },
      settings: {
        from: 'mncsgo19@gmail.com',
        replyTo: 'mncsgo19@gmail.com',
      },
    },
  });
  