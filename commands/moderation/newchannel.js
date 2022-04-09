module.exports = {
  name:"newchannel",
  code:`
$createChannel[$guildID;$message[1];$message[2];no]
$argsCheck[2;Usage: **ChannelName ChannelType**]
$onlyPerms[manageserver;:x: You Dont Have Admin Perms]
`
}