import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let pp = 'https://telegra.ph/file/fe3be2032a54c7b9b29a3.jpg'
let but1 = '𝐎𝐖𝐍𝐄𝐑'
let bit = usedPrefix + 'owner'
let donasi = `⮕ 𝐆𝗼𝐩𝐚𝐲 = [089636219593]
⮕ 𝐃𝐚𝐧𝐚 = [0895347198105]
⮕ 𝐒𝐚𝐰𝐞𝐫𝐢𝐚 = [https://saweria.co/Arifzyn]
*Atau Scan Qr Di Atas Untuk All Payment*

Pᴏᴡᴇʀ Bʏ ⬝ @${nomorwa.split`@`[0]}\nCʀᴇᴀᴛᴏʀ Bᴏᴛ ⬝ @${nomorown1.split`@`[0]}

𝐀𝐭𝐚𝐮 𝐊𝐥𝐢𝐤 𝐃𝐢 𝐁𝐚𝐰𝐚𝐡`
await conn.sendButtonDoc(m.chat, mm1 + ' Donasi ' + mm2, donasi, but1, bit, fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: '𝑺𝒄𝒂𝒏 𝑸𝑹 𝑰𝒏𝒊 𝑼𝒏𝒕𝒖𝒌 𝑩𝒂𝒚𝒂𝒓'  
				}
			}
})
}
handler.tags = ['menu', 'help']
handler.help = ['main']
handler.command = /^(menu|help)$/i

export default handler
