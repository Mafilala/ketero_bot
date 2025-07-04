import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';

import { registerStartCommand } from '../src/commands/start.js';
import { registerOrdersCommand } from   '../src/commands/orders.js';
import { registerTakeMeasureCommand } from '../src/commands/take_measure.js';
import { registerAdminToolCommand } from '../src/commands/admin_tool.js';

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
registerStartCommand(bot);
registerOrdersCommand(bot);
registerTakeMeasureCommand(bot);
registerAdminToolCommand(bot);

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  try {
    const update = JSON.parse(event.body);
    await bot.handleUpdate(update);
    return {
      statusCode: 200,
      body: 'OK',
    };
  } catch (error) {
    console.error('Error handling update:', error);
    return {
      statusCode: 500,
      body: 'Failed to process update',
    };
  }
}

