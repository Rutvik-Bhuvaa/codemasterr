const { createClient } = require("redis");

const redisClient = createClient({
  username: "default",
  password: process.env.REDIS_PASS,
  socket: {
    host: "redis-19569.crce217.ap-south-1-1.ec2.redns.redis-cloud.com",
    port: 19569,
  },
});

module.exports = redisClient;
