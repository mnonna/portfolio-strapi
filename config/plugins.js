module.exports = ({ env }) => ({
  email: {
    provider: 'smtp',
    providerOptions: {
      host: process.env.SMTP_GMAIL_HOST, //SMTP Host
      port: 465, //SMTP Port
      secure: true,
      username: process.env.SMTP_GMAIL_MAIL,
      password: process.env.SMTP_GMAIL_APP_KEY,
      rejectUnauthorized: true,
      requireTLS: false,
      connectionTimeout: 1,
    },
    settings: {
      from: process.env.SMTP_GMAIL_MAIL,
      replyTo: process.env.SMTP_GMAIL_MAIL,
    },
  },
});
