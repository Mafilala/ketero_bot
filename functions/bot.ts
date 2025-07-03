
import { Telegraf } from 'telegraf';
import { config } from 'dotenv';
import { createBot } from '../src/bot/setup';

config(); // load .env

const bot = createBot();

export async function handler(event: any) {
  try {
    const body = JSON.parse(event.body);
    await bot.handleUpdate(body);
    return {
      statusCode: 200,
      body: 'ok',
    };
  } catch (err) {
    console.error("Telegram error:", err);
    return {
      statusCode: 500,
      body: 'Internal server error',
    };
  }
}
