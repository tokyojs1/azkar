const azkarch = ""; // ايدي الروم
const azkar = require("azkar");
client.on('ready', async () => {
setInterval(() => {
let az = azkar.get()
 let azkr = new EmbedBuilder()
.setTitle(`**${az.category}**`)
.setTimestamp()
.setDescription(`\n **${az.zekr}**`)
.setAuthor("azkar", client.user.displayAvatarURL({dynamic : true}))
client.channels.cache.get(`${azkarch}`).send({embeds: [azkr]})
client.channels.cache.get(`${azkarch}`).send(line)
  }, 1000*60*60)// كل ساعة ينشر
})
