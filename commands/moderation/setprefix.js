module.exports = {
name: "setprefix",
aliases: ['changeprefix', 'sp'],
code: `
$description[1;**Done, my new prefix is** \`$message\`]
$color[1;BLUE]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;**You dont have** \`ADMIN\` **perms**]`
}