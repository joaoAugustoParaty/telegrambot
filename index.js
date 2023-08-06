const { Telegraf } = require('telegraf');


const bot = new Telegraf("6386264059:AAGkgVrOJDTpbgDFF8ZKASpzKy20edz7rdk");
bot.telegram.sendMessage(5343838115, "Agora é " + new Date());

//https://api.telegram.org/bot6386264059:AAGkgVrOJDTpbgDFF8ZKASpzKy20edz7rdk/getUpdates

// bot.start((ctx) => ctx.reply('Welcome'));
// bot.help((ctx) => ctx.reply('Send me a sticker'));
// bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
 bot.hears('oi', (ctx) => ctx.reply('No que posso ajuda?'));
 bot.launch();
