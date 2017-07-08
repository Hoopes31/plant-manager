module.exports = {
  db: {
    url: "test"
  },
  seed: true,
  logging: true,
  secrets: {
    jwt: "process.env.SECRET"
  },
  expireTime: 500000
};
