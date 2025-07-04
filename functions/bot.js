const { Telegraf } = require('telegraf');
require('dotenv').config();

const { registerStartCommand } = require('../src/commands/start');
const { registerOrdersCommand } = require('../src/commands/orders');
const { registerTakeMeasureCommand } = require('../src/commands/take_measure');
const { registerAdminToolCommand } = require('../src/commands/admin_tool');

const bot = new Telegraf(process.env.BOT_TOKEN);
registerStartCommand(bot);
registerOrdersCommand(bot);
registerTakeMeasureCommand(bot);
registerAdminToolCommand(bot);

exports.handler = async (event, context) => {
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
};
