import { Telegraf    } from 'telegraf';
import 'dotenv/config';

export const registerTakeMeasureCommand = (
  bot
  ) => {
  
  bot.command('measure', async (ctx) => {
    try {
         const webAppUrl = `${process.env.API_BASE_URL}keeper`; 
          await ctx.reply('Take Measure', {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Take Measure',
                    web_app: { url: webAppUrl }  
                  }
                ]
              ]
            }
          });    
  } catch (error) {
      console.error('[measure command] Error:', error);
      await ctx.reply('⚠️ Failed to take order. Please try again later.');
    }
  });
};
