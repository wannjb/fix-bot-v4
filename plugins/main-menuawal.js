import moment from 'moment-timezone'
import fs from 'fs'
import fetch from 'node-fetch'
  import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)

//tim
let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offsetalldiii0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
let nowaa = '0'
let nogww = '6281361281833'
let nogwww = `@${nomorown1.split`@`[0]}`
let nowa = `${nowaa.split`@`[0]}@s.whatsapp.net`
let nogw = `${nogww.split`@`[0]}@s.whatsapp.net`
let but1 = ('All Menu') 
let id1 = '.? all'
let but2 = ('List Menu') 
let id2 = '.tesm'
let but3 = ('Sewabot') 
let id3 = '.sewa'
let konten = (`*${ucapan()}, ${tag} 👋*, ${kata}`)
let knnt = `
*『 ɪɴᴛʀᴏᴅᴜᴄᴛɪᴏɴ 』* 

⁛ BOT(BUILD-OPERATE-TRANSFER) adalah program komputer yang dijalankan di Whatsapp yang khusus dibuat untuk melakukan pekerjaan-pekerjaan otomatis, BOT Whatsapp dirancang sedemikian rupa sehingga dapat digunakan dengan nyaman, dan kemungkinan memiliki sedikit bug, Adanya fitur dari bot WhatsApp ini tentu akan membantu anda untuk bersenang senang, dll`
let ᴛᴇs = `Pᴏᴡᴇʀ Bʏ ⬝ @${nomorwa.split`@`[0]}\nCʀᴇᴀᴛᴏʀ Bᴏᴛ ⬝ @${nomorown1.split`@`[0]}\n⫹⫺ DATE: ${week} ${date}\n⫹⫺ 𝗧𝗶𝗺𝗲: ${wktuwib}`
conn.send2ButtonImg(m.chat, await genProfile(conn, m), konten, ᴛᴇs, but1, id1, but2, id2, m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://facebook.com/sadtime098',
    mediaType: 2, 
    description: sgc,
    title: "Hᴀʟᴏ Jᴀɴɢᴀɴ Lᴜᴘᴀ Bᴇʀsʏᴜᴋᴜʀ!!",
    body: kata,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
}
    
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Kolkata').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Night Rider')
  }
  if (time >= 4) {
    wishloc = ('Good Morning')
  }
  if (time >= 12) {
    wishloc = ('Good Afternoon')
  }
  if (time >= 16) {
    wishloc = ('️Good Evening')
  }
  if (time >= 23) {
    wishloc = ('Night Rider')
  }
  return wishloc
}
