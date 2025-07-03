import { Telegraf } from "telegraf";
import getUserRole from "../lib/getUserRole"
export const registerStartCommand = (
  bot: Telegraf 
  ): void => {

    bot.start(async (ctx) => {
      const telegramId = ctx.from?.id;
      if (!telegramId) return;

      const role = await getUserRole(telegramId);
      if (role === '') return;
      const baseCommands = [
        { command: 'orders', description: 'list of new orders' },
        { command: 'measure', description: 'take clients measurements' },
      ];

      const adminCommands = [
        { command: 'admin_tool', description: 'configure tools' },
      ];

      const allCommands = role === 'admin' ? [...baseCommands, ...adminCommands] : baseCommands;

      await ctx.telegram.setMyCommands(allCommands, {
        scope: { type: 'chat', chat_id: telegramId }
      });

      ctx.reply(`Welcome! You are logged in as ${role}`);
    });
  }
