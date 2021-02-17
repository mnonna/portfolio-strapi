module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'portfolio'),
        username: env('DATABASE_USERNAME', 'lebrone2021'),
        password: env('DATABASE_PASSWORD', 'Drt545ncD'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
