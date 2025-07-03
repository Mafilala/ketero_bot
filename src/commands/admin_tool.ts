import { Telegraf    } from 'telegraf';
import 'dotenv/config';

export const registerAdminToolCommand = (
  bot: Telegraf
  ): void => {
  
  bot.command('admin_tool', async (ctx) => {
    try {
         const webAppUrl = `${process.env.API_BASE_URL}admin`;
          await ctx.reply('Admin Toos', {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Admin Dashboard',
                    web_app: { url: webAppUrl }  
                  }
                ]
              ]
            }
          });    
  } catch (error) {
      console.error('[order command] Error:', error);
      await ctx.reply('⚠️ Failed to fetch orders. Please try again later.');
    }
  });
};
