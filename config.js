// S C R I P T  O R I  B Y  Bochilgaming And KANNACHAN 🔭
// Ditulis Ulang Oleh WH MODS DEV
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// • Allah SWT
// • Nurutomo
// • Bochilgaming
// • Rominaru
// • Kannachann
// • FahriAdison
// • The.Sad.Boy01
// • Rlxfly
// • Rasel comel
// • ImYanXiao
// • WH MODS DEV
// • Xtreshe
// • Dll

//[!] Jangan Lupa Ganti Ownernya

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya
global.sig = 'https://instagram.com/mhdkrnwnn_' // ig
global.sgh = 'https://github.com/wannjb/' // github
global.sgc = 'https://chat.whatsapp.com/GwCTefLrBr85NFFrqDE1pK' // group whatsapp
global.sdc = 'https://www.discord.com'//discord
global.snh = 'https://www.youtube.com/channel/UCMx4e8anOq_Olt2nMSv0Cow' // my youtube channel
global.sfb = 'https://www.facebook.com/wawanjr' // facebook
global.syt = 'https://www.youtube.com/' // my youtube channel "kalau ada yt ke 2 tarok link nya disini"

/*============== PAYMENT ==============*/
global.pdana = '0895327999292' //dana
global.povo = '0895327999292' //ovo
global.pgopay = '089518377899' //gopay
global.plinkaja = '0895327999292' //link aja
global.ppulsa = '0895327999292' //telkomsel
global.ppulsa2 = '0895327999292' // kalau ada kartu lain isi aja
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '6289518377899'
global.nomorown = '62895327999292'
global.nomorown1 = '62895327999292'
global.nomorown2 = '62895327999292'
global.nomorwa = '0'
global.namebot = 'WannTrue BOT'
global.nameown = 'WannTrue'
/*============== Github Thanks To ==============*/
global.namagithub = 'wannjb' // nama github lu
global.linkgithub = 'https://github.com/wannjb/Haruka-Md-1' // tarok link github lu

// klau kgk ada github kasih tanda '-' aja biar kgk error

/*============== APIKEY SIMPEL ==============*/
global.zenzkey = 'b8040941f7'
global.lolkey = 'e54205a4ca2caa368cc067bb' // PUNYA WAHID  8e66d0934cf741bfd2182c16


/*============== STAFF ==============*/
global.owner = [
  ['62895327999292', 'WannTrue', true],
  ['62895327999305', 'WannTrue BOT', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true],
  ['-', 'ISI KALAU ADA', true]
    //Ganti jd nomormu sama Namamu
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'ebb6251cc00f9c63',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com' : 'xZiyy'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
global.wm = '                「 WannTrue  」' //Main Watermark
global.wm2 = '© WannTrue '
global.wm3 = '⫹⫺ WannTrue '
global.botdate = `⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `T I M E : ${wktuwib}`
global.titlebot = `⫹⫺ WhatsApp Bot | By WannTrue`
global.packname = '☂︎ ᴄʀᴇᴀᴛᴇᴅ ʙʏ'
global.author = '                「WannTrue」'

/*Fake*/
global.fsizedoc = '1'.repeat(10)
global.fpagedoc = '1'.repeat(10)
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'


/*============== LOGO ==============*/
global.thumb = 'https://i.ibb.co/XZrK6yQ/transformers.jpg' //Main Thumbnail
global.imagebot = 'https://i.ibb.co/XZrK6yQ/transformers.jpg'
global.giflogo = 'https://telegra.ph/file/a46ab7fa39338b1f54d5a.mp4'
global.thumbs = ['https://i.ibb.co/XZrK6yQ/transformers.jpg']
global.fla = 'https://i.ibb.co/XZrK6yQ/transformers.jpg'
global.thumbnailUrl = [
'https://telegra.ph/file/81260a8b9e8cff26d2b48.jpg','https://telegra.ph/file/ac4928f0824a2a0492737.jpg',
'https://telegra.ph/file/6359b013bc7e52c3b346f.jpg','https://telegra.ph/file/d43c89a5d2da72875ec05.jpg',
'https://telegra.ph/file/7d6c0e35f9c8f52715541.jpg','https://telegra.ph/file/ef4b742d47e6a9115e2ff.jpg',
'https://telegra.ph/file/55e5af5f33fbd57104187.jpg','https://telegra.ph/file/af236598456b95884bd15.jpg',
'https://telegra.ph/file/de92ed4a729887ffc974c.jpg','https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg']

global.flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']
global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

/*============== HENTAI ==============*/ 
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?


global.hyuri = ['https://telegra.ph/file/5d908f4a17515a15c6202.jpg']
global.hLokun = ['https://telegra.ph/file/8902f4fc550727a62e99f.jpg','https://telegra.ph/file/6a6a40e924c16a8f0de03.jpg', 'https://telegra.ph/file/b035d3038a0b124f1d846.jpg', 'https://telegra.ph/file/9d475f7852bf6f6193c80.jpg']
global.hloli = ['https://telegra.ph/file/872c360a7104d86752650.jpg', 'https://telegra.ph/file/f6bbb53620374257bfa51.jpg','https://telegra.ph/file/9b76375f3869440818d57.jpg','https://telegra.ph/file/a78443f0ee887f46808d7.jpg']
global.hneko = ['https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg', 'https://telegra.ph/file/f9c4d97477b647cf57a2b.jpg','https://telegra.ph/file/b6905b77e6c7732592a13.jpg', 'https://telegra.ph/file/9f82c432d0ba4cfffda9a.png', 'https://telegra.ph/file/484083949d4bfd763b8cf.jpg']
global.hbunny = ['https://telegra.ph/file/2b71a8d46d29351479fbc.jpg', 'https://telegra.ph/file/ae610571b62b5ab876e9c.jpg', 'https://telegra.ph/file/cc8255d5b989eef587af2.jpg','https://telegra.ph/file/30d2e7375996abd9cfee3.jpg', 'https://telegra.ph/file/78980c90c44a95a1d30fa.jpg', 'https://telegra.ph/file/2ac5d8ccf23e73eaa5bfa.jpg']
global.hbeach = ['https://telegra.ph/file/14ae0ba2da77d74e6b80c.jpg', 'https://telegra.ph/file/b6905b77e6c7732592a13.jpg','https://telegra.ph/file/9da45a352eb4c40e5d641.jpg', 'https://telegra.ph/file/59e78846ee365975ee6e3.jpg','https://telegra.ph/file/1bf7dee46b83eb4c41d7d.jpg','https://telegra.ph/file/0525a7929f819cb8278f3.jpg']

/*============== TEXT ==============*/
global.wait = '```「▰▰▰▰▰▰▰▰▱▱」Loading Bre...```'
global.eror = '```404 error```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✦ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '✦' //pembatas menu selector

global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']

/*============== STICKER WM ==============*/
global.stickpack = 'WannTrue BOT'
global.stickauth = `By © Wann`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
