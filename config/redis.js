const redis = require("redis");
const dotenv = require("dotenv");
dotenv.config();

const host = process.env.REDIS_HOST || "localhost";

const redisClient = redis.createClient({ port: 6379, host });

(async () => {
  await redisClient.connect();
})();

console.log("Connecting to the Redis");

redisClient.on("ready", () => {
  console.log("Connected!");
});

redisClient.on("error", (err) => {
  console.log("Error in the Connection");
});

module.exports = redisClient;
