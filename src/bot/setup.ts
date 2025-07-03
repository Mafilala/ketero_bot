import { Telegraf } from 'telegraf';
import { registerOrdersCommand } from '../commands/orders';
import { registerTakeMeasureCommand } from '../commands/take_measure';
import { registerStartCommand } from '../commands/start';
import { registerAdminToolCommand } from '../commands/admin_tool';

export const createBot = (): Telegraf => {
  const bot = new Telegraf(process.env.BOT_TOKEN);
 
  registerStartCommand(bot)
  registerOrdersCommand(bot)
  registerTakeMeasureCommand(bot)
  registerAdminToolCommand(bot)

  bot.catch((error) => {
    console.error('[bot] Global error:', error);
  });

  return bot;
};
