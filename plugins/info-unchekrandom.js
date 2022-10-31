import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let name = conn.getName(m.sender)
let esce = `text nya `
let flaaa2 = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'Ayo di pollow dulu 💪😼
~*INSTAGRAM OFFICIAL*~
*https://www.instagram.com/mhdkrnwnn_*

❏┳━━◩
┍┛
┆⟥⟤ ➠ (${global.bottime})
└─┈⟅`
let nth = `☰⟥⟝⟞⟝❨ *AWOKAWOK* ❩⟞⟝⟞⟤☰`
conn.send3ButtonImg(m.chat, `${pickRandom(flaaa2)}` + `${ucapan()} ` + `${name}`, nth, rules, 'Menu', '.menu', 'Owner', '.owner', 'Credit', '.credit', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: 'https://wa.me//62895327999292',
    mediaType: 2, 
    description: sgc,
    title: "Beli unchek di sini cuy!!!",
    body: wm,
    thumbnail: fs.readFileSync('./media/qr.png'),
    sourceUrl: 'https://wa.me//62895327999292',
     }}
  })
}
handler.help = ['akun']
handler.tags = ['akun', 'premium', 'limitmenu']
handler.command = /^(akun)$/i
handler.premium = true
handler.register = true
handler.limit = true

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Selamat Malam"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 10) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 18) {
    res = "Selamat Malam"
  }
  return res
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
