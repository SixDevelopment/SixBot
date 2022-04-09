module.exports = {
    name:"CreateRole",
    code:`
    $createRole[$guildid;$message]
    $description[1;Done! $username I Have Created $message Role]
    $onlyperms[admin;:x: You Dont Have Admin Perms]
    `
}