import { Telegraf } from 'telegraf';
import { registerOrdersCommand } from '../commands/orders';
import { registerTakeMeasureCommand } from '../commands/take_measure';
import { registerStartCommand } from '../commands/start';
import { registerAdminToolCommand } from '../commands/admin_tool';

export const createBot = (): Telegraf => {
  const token = process.env.BOT_TOKEN;
  if (!token) {
    throw new Error('BOT_TOKEN is not set in environment variables');
  }

const bot = new Telegraf(token); 
  registerStartCommand(bot)
  registerOrdersCommand(bot)
  registerTakeMeasureCommand(bot)
  registerAdminToolCommand(bot)

  bot.catch((error) => {
    console.error('[bot] Global error:', error);
  });

  return bot;
};
