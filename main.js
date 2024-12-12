import { Telegraf, Markup } from "telegraf";

const token = "7554557850:AAFxomtChZPtX6X8qdi73qRiPLe6P_psuJA";
const webAppUrl = "https://canteen-zav.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Тест отправки сообщений 2",
    Markup.keyboard([Markup.button.webApp("Меню", webAppUrl)]),
  );
});

bot.launch();
