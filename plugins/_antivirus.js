const isVirtex = /৭৭৭|๒๒๒|؋.ᄻ.ྜྷ.ᇸ.ྙ|๖ۣۜy๖ۣۜF๖ۣۜr๖|๑๑๑|৭৭৭৭৭৭৭৭|♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚|㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ|㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢|๑๑๑๑๑๑๑๑|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|ผิดุท้่เึางืผิดุท้่เึางื|PLHIPS|๒|๑|ৡ|⃟|Đ.Δ.Μ/i

export async function before(m, { conn, isAdmin, isBotAdmin }) {
	if (m.isBaileys && m.fromMe) return !0
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	const isGroupLink = linkRegex.exec(m.text)
	if (chat.antivirtex && isgroup && !isAdmin) {
		if (isBotAdmin) {
			const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
			if (m.text.includes(linkThisGroup)) return !0
		}
		if (!m.fromMe && isBotAdmin) await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender } })
		await conn.sendMessage(m.chat, { text: `@${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} *TERDETEKSI* mengirim link virtex!, Minimal gak goblok dek, bukan masuk langsung share virtex padahal ada bot!`, mentions: [m.sender] }, { quoted: fkontak })
	}
	return !0
}
