module.exports = {
  name:"ban",
  code:`
$username[$message] has been banned from the guild.
$ban[$mentioned[1];$guildID;0;$noMentionMessage]
$argsCheck[1;Just enter the User ID of who you want to ban.]
$onlyPerms[ban;Only Admins Can Use This!]
`
}