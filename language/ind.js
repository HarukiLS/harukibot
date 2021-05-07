const a = '```'

exports.wait = () => {
	return`*「 AGUARDE 」 TO FAZENU GARAIO*`
}

exports.succes = () => {
	return`*「 SUCESSO 」*`
}

exports.lvlon = () => {
	return`*「 ATIVADO 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DESATIVADO 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL AINDA NÃO ESTÁ ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*como registrar ${prefix}daftar Nome|idade* \n*exemplo ${prefix}daftar Haruki|18*`
}

exports.rediregis = () => {
	return`*「 REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*falhou, tente repetir*`
}

exports.linkga = () => {
	return`*desculpe, link inválido*`
}

exports.groupo = () => {
	return`*「SOMENTE EM GRUPO」*`
}

exports.ownerb = () => {
	return`*「SÓ O HARUKI PODE USAR ISSO KARALHO, QUEM É VOCÊ?」*`
}

exports.ownerg = () => {
	return`*「SOMENTE O DONO DO GRUPO」*`
}

exports.admin = () => {
	return`*「👮SOMENTE ADM DO GRUPO👮」*`
}

exports.badmin = () => {
	return`*「BOT PRECISA SER ADM」*`
}

exports.nsfwoff = () => {
	return`*NSFW ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*formato incorreto/texto em branco*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRO 」*\n\nPara saber se você se cadastrou, verifique a mensagem que enviei \n\nNOTA:\n*meu ovo*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DADOS 」*\n\nvocê se cadastrou com os dados \n\n┏━⊱Nome\n┗⊱${namaUser}\n┏━⊱Número\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱Idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : era uma vez um velho que comeu o cú de qm ta lendo, fim.`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}* não encontrado\tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*desculpe ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`* ${pushname} *\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nível necessário : ${aha}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nível necessário : ${ahb}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nível necessário : ${ahc}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nível necessário : ${ahd}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nível necessário : ${ahe}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nível : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱nível necessário : ${ahf}*\n\n_NOTA : CONVERSE PARA GANHAR XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu) => { 
	return `
${a}❏ SOBRE O USUÁRIO${a}
 ${a}│ Nome : ${pushname}${a}
 ${a}│ Número : wa.me/${sender.split("@")[0]}${a}
 ${a}│ Sua grana : RS${uangku},-${a}
 ${a}│ XP : ${getLevelingXp(sender)}/${reqXp} ${a}
 ${a}│ Level : ${getLevelingLevel(sender)}${a}
 ${a}│ Role : ${role}${a}
 ${a}╰ User register : ${_registered.length}${a}
 
 ${a}「uso total do comando」${a}
 *${pepolu} usado*

 *${prefix}info*
 *${prefix}donasi*
 *${prefix}owner*

${a}❏💮MENU DE CRIAÇÃO💮${a}
 ${a}│•${prefix}sticker${a}
 ${a}│•${prefix}quotemaker${a}
 ${a}│•${prefix}qrcode${a}
 ${a}│•${prefix}nulis${a}
 ${a}│•${prefix}text3d${a}
 ${a}│•${prefix}tahta${a}
 ${a}╰•${prefix}ttp${a}
 
${a}❏✴MENU DIVERTIDO✴${a}
 ${a}│•${prefix}lirik${a}
 ${a}│•${prefix}artinama${a}
 ${a}│•${prefix}chord${a}
 ${a}│•${prefix}bisakah${a}
 ${a}│•${prefix}readmore${a}
 ${a}│•${prefix}kapankah${a}
 ${a}│•${prefix}apakah${a}
 ${a}│•${prefix}rate${a}
 ${a}│•${prefix}tebakgambar${a}
 ${a}│•${prefix}meme${a}
 ${a}│•${prefix}textlight${a}
 ${a}│•${prefix}glitchtext${a}
 ${a}│•${prefix}slap${a}
 ${a}│•${prefix}emoji${a}
 ${a}│•${prefix}animequotes${a}
 ${a}│•${prefix}katacinta${a}
 ${a}│•${prefix}neonime${a}
 ${a}│•${prefix}stickerhide${a} ~[error]~
 ${a}│•${prefix}tampar${a}
 ${a}│•${prefix}quotes${a}
 ${a}│•${prefix}moddroid${a} 
 ${a}│•${prefix}apkpure${a}
 ${a}╰•${prefix}happymod${a} 
 
${a}❏💮MUTUAL💮${a}
 ${a}│•${prefix}mutual${a}
 ${a}╰•${prefix}next${a}
 
${a}❏💻MENU DE MÍDIA💻${a}
 ${a}│•${prefix}brainly${a}
 ${a}│•${prefix}pinterest${a}
 ${a}│•${prefix}resepmasakan${a}
 ${a}│•${prefix}igstalk${a}
 ${a}│•${prefix}beritahoax${a}
 ${a}│•${prefix}tiktok${a}
 ${a}│•${prefix}infonomor${a}
 ${a}│•${prefix}fototiktok${a}
 ${a}│•${prefix}bitly${a}
 ${a}│•${prefix}tiktokstalk${a}
 ${a}│•${prefix}ssweb${a}
 ${a}╰•${prefix}kbbi${a}
 
${a}❏🎶MÚSICA🎶${a}
 ${a}│•${prefix}ytmp3${a}
 ${a}│•${prefix}ytmp4${a}
 ${a}╰•${prefix}joox${a}
 
${a}❏🔞NSFW🔞${a}
 ${a}│•${prefix}anjing${a}
 ${a}│•${prefix}blowjob${a}
 ${a}│•${prefix}nekonime${a}
 ${a}│•${prefix}pokemon${a}
 ${a}│•${prefix}husbu${a}
 ${a}│•${prefix}nangis${a}
 ${a}│•${prefix}cium${a}
 ${a}│•${prefix}peluk${a}
 ${a}╰•${prefix}ranime${a}
 
${a}❏💲LIMITE & GRANA💲${a}
 ${a}│•${prefix}limit${a}
 ${a}│•${prefix}buylimit${a}
 ${a}│•${prefix}transfer${a}
 ${a}│•${prefix}dompet${a}
 ${a}│•${prefix}giftlimit${a}
 ${a}╰•${prefix}leaderboard${a}
 
${a}❏🐉MENU DE GRUPO🐉${a}
 ${a}│•${prefix}delete${a}
 ${a}│•${prefix}hidetag${a}
 ${a}│•${prefix}blocklist${a}
 ${a}│•${prefix}grouplist${a}
 ${a}│•${prefix}level${a}
 ${a}│•${prefix}linkgc${a}
 ${a}│•${prefix}tagall${a}
 ${a}│•${prefix}setpp${a}
 ${a}│•${prefix}add${a}
 ${a}│•${prefix}kick${a}
 ${a}│•${prefix}setname${a}
 ${a}│•${prefix}setdesc${a}
 ${a}│•${prefix}demote${a}
 ${a}│•${prefix}promote${a}
 ${a}│•${prefix}listadmin${a}
 ${a}│•${prefix}group [buka/tutup]${a}
 ${a}│•${prefix}leveling [enable/disable]${a}
 ${a}│•${prefix}nsfw [1/0]${a}
 ${a}│•${prefix}simih [1/0]${a}
 ${a}│•${prefix}welcome [1/0]${a}
 ${a}│•${prefix}antilink [1/0]${a}
 ${a}│•${prefix}join${a}
 ${a}╰•${prefix}nobadword [enable/disable]${a}
 
${a}❏🐉TOOLS🐉${a}
 ${a}│•${prefix}bass${a}
 ${a}│•${prefix}tomp3${a}
 ${a}│•${prefix}slowmo${a}
 ${a}│•${prefix}gemok${a}
 ${a}│•${prefix}wasted${a}
 ${a}│•${prefix}tourl${a}
 ${a}│•${prefix}triggered${a}
 ${a}│•${prefix}wanted${a}
 ${a}│•${prefix}facebookpage${a}
 ${a}│•${prefix}gtav${a}
 ${a}│•${prefix}costumwp${a}
 ${a}│•${prefix}pantaimalam${a}
 ${a}│•${prefix}crossgun${a}
 ${a}│•${prefix}bakar${a}
 ${a}│•${prefix}pencil${a}
 ${a}╰•${prefix}tupai${a}
 
${a}❏☁ARMAZENAMENTO NA NUVEM☁${a}
 ${a}│•${prefix}addsticker${a}
 ${a}│•${prefix}getsticker${a}
 ${a}│•${prefix}stickerlist${a}
 ${a}│•${prefix}addvideo${a}
 ${a}│•${prefix}getvideo${a}
 ${a}│•${prefix}videolist${a}
 ${a}│•${prefix}getimage${a}
 ${a}│•${prefix}addImage${a}
 ${a}│•${prefix}imagelist${a}
 ${a}│•${prefix}addaudio${a}
 ${a}│•${prefix}getaudio${a}
 ${a}╰•${prefix}audiolist${a}
 
${a}❏🔱MENU PARA O HARUKI🔱${a}
 ${a}│•${prefix}bc${a}
 ${a}│•${prefix}addbadword${a}
 ${a}│•${prefix}delbadword${a}
 ${a}│•${prefix}bcgc${a}
 ${a}│•${prefix}kickall${a}
 ${a}│•${prefix}setreply${a}
 ${a}│•${prefix}setprefix${a}
 ${a}│•${prefix}clearall${a}
 ${a}│•${prefix}block${a}
 ${a}│•${prefix}unblock${a}
 ${a}│•${prefix}leave${a}
 ${a}│•${prefix}event [1/0]${a}
 ${a}│•${prefix}clone${a}
 ${a}╰•${prefix}setppbot${a}
 
${a}❏SOBRE O BOT${a}
 ${a}│ • Nome : ${client.user.name}${a}
 ${a}│ • browser : ${client.browserDescription[1]}${a}
 ${a}│ • server : ${client.browserDescription[0]}${a}
 ${a}│ • Versão : ${client.browserDescription[2]}${a}
 ${a}│ • Velocidade : ${process.uptime()}${a}
 ${a}│ • handphone : ${client.user.phone.device_manufacturer}${a}
 ${a}╰ • Versão do Zap : ${client.user.phone.wa_version}${a}
 
${a}❏THANKS TO${a}
 ${a}│${a}
 ${a}│ • ʜᴀʀᴜᴋɪ ʟs${a}
 ${a}│ • Dante${a}
 ${a}│ • Animezando${a}
 ${a}│ • Link: https://chat.whatsapp.com/EPJdZtbRGo0FusCyzc939I${a}
 ${a}│${a}
 ${a}╰ • NOTA : MAME O BOT${a}
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
*「 PARABÉNS 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Role*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe+ ${pushname} O limite de hoje aumentou*\n*limite de compra para obter limite/subir de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 CONTAGEM DE LIMITE 」*
Seu limite : ${limitCounts}

NOTA : para chegar ao limite.  pode passar de nível ou limite de capacidade`
}

exports.satukos = () => {
	return`*Digite 1/enable ou 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 ATM 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Número* : ${sender.split("@")[0]}\n┣⊱ *Grana* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Recurso AFK bem-sucedido *ativado*!\n\n➸ *Nome do usuário*: ${pushname}\n➸ *Razão*: ${reason}`
}

exports.afkOnAlready = () => {
    return `O recurso AFK foi ativado de antemão.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 MODO AFK 」*\n\nShhhhhhhhhhhhhhhhh!  A pessoa está AFK, não se preocupe!\n➸ *Razão*: ${getReason}\n➸ *Desde*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* voltou do AFK!  Bem vindo de volta~`
}
