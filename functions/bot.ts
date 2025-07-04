import { createBot } from "../src/bot/setup";

const bot = createBot();

export async function handler(event: any) {
  try {
    await bot.handleUpdate(JSON.parse(event.body));
    return {
      statusCode: 200,
      body: "ok",
    };
  } catch (err) {
    console.error("Error handling Telegram update:", err);
    return {
      statusCode: 500,
      body: "Internal Server Error",
    };
  }
}
