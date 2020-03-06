const base = {
  client: "sqlite3",
  connection: {
    filename: "./data/database.db3",
  },
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
};

module.exports = {
  development: {
    ...base,
  },

  testing: {
    ...base,
    connection: {
      filename: "./data/test.db3",
    },
  },
};
