let handler = async (m, { conn, text, usedPrefix, command }) => {
let pp = fla.getRandom()
let totalf = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
let tqto = `_* 『 Info Total Fitur 』 *_ 

*🔖 FITUR :* ${totalf.length}`
conn.sendButtonLoc(m.chat, pp + 'Total Fitur', 'Pᴏᴡᴇʀ Bʏ ⬝ @${nomorwa.split`@`[0]}\nCʀᴇᴀᴛᴏʀ Bᴏᴛ ⬝ @${nomorown1.split`@`[0]}', 'MENU', usedPrefix + 'menu', m)
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^total(fitur|ft)$/i
export default handler
