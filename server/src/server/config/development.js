module.exports = {
  db: {
    url: "test"
  },
  seed: false,
  logging: true,
  secrets: {
    jwt: "process.env.SECRET"
  },
  expireTime: 500000
};
