import 'dotenv/config';
import { createBot } from './bot/setup';

const start = async () => {
  try {
    const bot = createBot();
    await bot.launch();
  } catch (error) {
    console.error('Failed to start bot:', error);
    process.exit(1);
  }
};

// Start the bot
start();
