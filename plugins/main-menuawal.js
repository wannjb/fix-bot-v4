import fetch from 'node-fetch'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
//let handler = async(m, { conn, text, usedPrefix, command }) => {
//let pp = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image')

let str = `${global.wm}
TES
let wibu = `https://telegra.ph/file/efbf6b53a658d683aaa71.jpg` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'🪀 Commands 🪀','.listmenu', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
  }
  } }) 
          }
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^menu(menu|help)$/i

export default handler
