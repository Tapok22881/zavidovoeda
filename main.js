import { Telegraf, Markup } from "telegraf";

const token = "";
const webAppUrl = "https://canteen-zav.web.app";

const bot = new Telegraf(token);

bot.command("start", (ctx) => {
  ctx.reply(
    "Тест отправки сообщений 2",
    Markup.keyboard([Markup.button.webApp("Меню", webAppUrl)]),
  );
});

bot.launch();
