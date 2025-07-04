import { getUserRole } from '../lib/getUserRole.js';

 export const registerStartCommand = (bot) =>  {
    bot.start(async (ctx) => {
    const telegramId = ctx.from?.id;
    if (!telegramId) return;

    const role = await getUserRole(telegramId);
    if (role === '') return;

    const baseCommands = [
      { command: 'orders', description: 'List of new orders' },
      { command: 'measure', description: 'Take client measurements' },
    ];

    const adminCommands = [
      { command: 'admin_tool', description: 'Configure tools' },
    ];

    const allCommands = role === 'admin' ? [...baseCommands, ...adminCommands] : baseCommands;

    await ctx.telegram.setMyCommands(allCommands, {
      scope: { type: 'chat', chat_id: telegramId }
    });

    ctx.reply(`Welcome! You are logged in as ${role}`);
  });
}


