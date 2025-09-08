import { redis } from '../config';
import { createClient } from 'redis';
import Logger from '../core/Logger';

const redisPassword = encodeURIComponent(redis.password);
const redisURL = `redis://:${redisPassword}@${redis.host}:${redis.port}`;
console.log("🚀 ~ redisURL:", redisURL)
const client = createClient({ url: redisURL });

client.on('connect', () => Logger.info('Cache is connecting'));
client.on('ready', () => Logger.info('Cache is ready'));
client.on('end', () => Logger.info('Cache disconnected'));
client.on('reconnecting', () => Logger.info('Cache is reconnecting'));
client.on('error', (e) => Logger.error(e));

(async () => {
  await client.connect();
})();

// If the Node process ends, close the Cache connection
process.on('SIGINT', async () => {
  client.destroy();
});

export default client;
