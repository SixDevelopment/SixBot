module.exports = {
  name:"add.prerium",
  code:`
$onlyif[$guildID==957974333467283486;You Cant Activate It]
$onlyif[$UserID==869148583708983306]
$onlyPerms[admin;You Don't Have Admin Perms]
$setUserVar[prerium;true;$mentioned;957974333467283486]
\`Done\`
`
}
//you can put your guild in $onlyif[$guilddid==yourguildid;error message]
//you can put your user id in $onlyif[userdid==youruerid;error message]