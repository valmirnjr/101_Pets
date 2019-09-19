module.exports = {
  dialect: "postgres",
  host: "localhost",
  username: "postgres",
  password: "docker",
  database: "101pets",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
