const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const bot = new Telegraf('6665451018:AAHDRTe-roEhIB3NA6ToF9khrsl_sJDJoUA');

// Command handler
bot.command('getpdf', async (ctx) => {
    const chatId = ctx.message.chat.id;

    try {
        // Provide the path to the local PDF file
        const pdfPath = __dirname+ '/Atomic Habits by James Clear.pdf';

        // Send the PDF file to the user
        await ctx.replyWithDocument({ source: pdfPath });
    } catch (error) {
        console.error('Error sending PDF:', error);
        ctx.reply('Sorry, there was an error sending the PDF.');
    }
});

// Start the bot
bot.launch();
