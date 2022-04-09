module.exports ={
    name:"Warn",
    code:`
    $setUserVar[warns;0]
    $setuservar[warns;$sum[$setuservar[warns];1]]
    $description[1;
        $username Warned <@$mentioned[1]> Now <@$mentioned[1]> Has $getUserVar[warns] Warns
        Reason **$message**
    ]
    $replaceText[$message;$message[1];:;]
    `
}