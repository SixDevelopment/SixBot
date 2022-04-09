//Note This Cant Delete Message Older Than 14 Days

module.exports = {
  name:"purge",
  code:`
$clear[$message]
Done $username
$onlyPerms[manageserver;:x: You Dont Have Admin Perms]
`
}