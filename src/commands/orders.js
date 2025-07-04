import 'dotenv/config';

export const registerOrdersCommand = (
  bot
  ) => {
  
  bot.command('orders', async (ctx) => {
    try {
         const webAppUrl = `${process.env.API_BASE_URL}keeper/orders`;
          await ctx.reply('📋 View orders:', {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'See Orders',
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
