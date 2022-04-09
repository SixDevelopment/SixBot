const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'ModeratorBot';
});

app.listen(3000);
const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: "YourToken",
prefix: "$getServerVar[prefix]",
intents: "all",
fetchInvites: true
})


//Events
bot.onMessage()

//Command Handler
const loader = new aoijs.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]
$log[Now Your Bot Has $allMembersCount Members And $serverCount servers!]`
})

bot.variables({
  prefix: "-",
  prerium: "false",
  Ticket1: "=",
  TicketSetup: "false",
  warns: "False"
})

//Status
bot.status({
  text: "-help",
  type: "PLAYING",
  time: 666
})