const { Telegraf } = require('telegraf');
const axios = require('axios');

// Replace 'YOUR_BOT_TOKEN' with the token you received from BotFather
const bot = new Telegraf('6665451018:AAHDRTe-roEhIB3NA6ToF9khrsl_sJDJoUA');

// Command handler
bot.command('getpdf', async (ctx) => {
    const chatId = ctx.message.chat.id;

    try {
        // Replace 'PDF_URL' with the actual URL of the PDF file
        const pdfUrl ="https://docs.google.com/viewer?a=v&pid=sites&srcid=cXdpa2xhYnMubmV0fGZpbGVzfGd4OjcxYjNjMGZmZmUyYjcwZWI" ;

        // Fetch the PDF file
        const pdfResponse = await axios.get(pdfUrl, { responseType: 'arraybuffer' });
        console.log(pdfResponse.data);
        // Send the PDF file to the user
        await ctx.replyWithDocument({ source: { value: pdfResponse.data, options: { filename: 'document.pdf' } } });
    } catch (error) {
        console.error('Error sending PDF:', error);
        ctx.reply('Sorry, there was an error sending the PDF.');
    }
});

// Start the bot
bot.launch();
