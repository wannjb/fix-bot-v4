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
    
//==============> Menu nya
let intro = `*ʙᴏᴛ* *ʙᴜɪʟᴅ-ᴏᴘᴇʀᴀᴛᴇ-ᴛʀᴀɴsғᴇʀ* _ᴀᴅᴀʟᴀʜ ᴘʀᴏɢʀᴀᴍ ᴋᴏᴍᴘᴜᴛᴇʀ ʏᴀɴɢ ᴅɪᴊᴀʟᴀɴᴋᴀɴ ᴅɪ ᴡʜᴀᴛsᴀᴘᴘ ʏᴀɴɢ ᴋʜᴜsᴜs ᴅɪʙᴜᴀᴛ ᴜɴᴛᴜᴋ ᴍᴇʟᴀᴋᴜᴋᴀɴ ᴘᴇᴋᴇʀᴊᴀᴀɴ-ᴘᴇᴋᴇʀᴊᴀᴀɴ ᴏᴛᴏᴍᴀᴛɪs, ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ᴅɪʀᴀɴᴄᴀɴɢ sᴇᴅᴇᴍɪᴋɪᴀɴ ʀᴜᴘᴀ sᴇʜɪɴɢɢᴀ ᴅᴀᴘᴀᴛ ᴅɪɢᴜɴᴀᴋᴀɴ ᴅᴇɴɢᴀɴ ɴʏᴀᴍᴀɴ, ᴅᴀɴ ᴋᴇᴍᴜɴɢᴋɪɴᴀɴ ᴍᴇᴍɪʟɪᴋɪ sᴇᴅɪᴋɪᴛ ʙᴜɢ, ᴀᴅᴀɴʏᴀ ғɪᴛᴜʀ ᴅᴀʀɪ ʙᴏᴛ ᴡʜᴀᴛsᴀᴘᴘ ɪɴɪ ᴛᴇɴᴛᴜ ᴀᴋᴀɴ ᴍᴇᴍʙᴀɴᴛᴜ ᴀɴᴅᴀ ᴜɴᴛᴜᴋ ʙᴇʀsᴇɴᴀɴɢ sᴇɴᴀɴɢ, ᴅʟʟ_`
conn.send3ButtonDoc(m.chat, `\n\n     *『 ɪ ɴ ᴛ ʀ ᴏ ᴄ ᴀ ᴅ ᴜ ᴛ ɪ ᴏ ɴ 』*\n\n`, intro + `\n\n${tag}\n\n`, 'Aʟʟ Mᴇɴᴜ', '.? all', 'Lɪsᴛ Mᴇɴᴜ', '.tesm', '\nAku Pedo Ygy', 'bilek', m, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg'), thumbnailUrl: sgc, title: 'ɪ ɴ ᴛ ʀ ᴏ ᴄ ᴀ ᴅ ᴜ ᴛ ɪ ᴏ ɴ'}}})
    } 
    
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler

//----------- FUNGSI -------

fungsi  pickRandom ( daftar )  {
   daftar kembali [ Math . lantai ( Math . random ( )  *  list . length ) ]
}

const  lebih  =  String . dariCharCode ( 8206 )
const  readMore  =  lebih banyak . ulangi ( 4001 )

fungsi  clockString ( ms )  {
  misalkan  h  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  3600000 )
  misalkan  m  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  60000 )  %  60
  misalkan  s  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  1000 )  %  60
  kembali  [ h ,  'H' ,  m ,  'M' ,  s ,  'S' ] . peta ( v  =>  v . toString ( ) . padStart ( 2 ,  0 ) ) . bergabung ( '' )
}
fungsi  clockStringP ( ms )  {
  biarkan  kamu  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  31104000000 )  %  10
  misalkan  mo  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  2592000000 )  %  12
  misalkan  d  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  8640000 )  %  30
  misalkan  h  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  3600000 )  %  24
  misalkan  m  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  60000 )  %  60
  misalkan  s  =  isNaN ( ms ) ? '--' : Matematika . lantai ( ms  /  1000 )  %  60
  kembali  [ kamu ,  ' *Tahun ️*\n' ,   bulan ,  ' *Bulan *\n' ,  d ,  ' *Hari ️*\n' ,  h ,  ' *Jam *\n' ,  m ,  ' * Menit ⏰*\n' ,  s ,  ' *Kedua ️*' ] . peta ( v  =>  v . toString ( ) . padStart ( 2 ,  0 ) ) . bergabung ( '' )
}
 ucapan fungsi ( )  {
  konstanta  waktu  =  momen . tz ( 'Asia/Jakarta' ) . format ( 'HH' )
  let  res  =  "Sudah Dini Hari Kok Belum Tidur Kak? "
  jika  ( waktu  >=  4 )  {
    res  =  "Pagi Tuhan "
  }
  jika  ( waktu  >=  10 )  {
    res  =  "Selamat Siang Kak ️"
  }
  jika  ( waktu  >=  15 )  {
    res  =  "Selamat Sakit Kak "
  }
  jika  ( waktu  >=  18 )  {
    res  =  "Malam Kak "
  }
  kembalikan  res
}

fungsi  keinginan ( )  {
    biarkan  wishloc  =  ''
  konstanta  waktu  =  momen . tz ( 'Asia/Kolkata' ) . format ( 'HH' )
  wishloc  =  ( 'hai' )
  jika  ( waktu  >=  0 )  {
    wishloc  =  ( 'Penunggang Malam' )
  }
  jika  ( waktu  >=  4 )  {
    wishloc  =  ( 'Selamat Pagi' )
  }
  jika  ( waktu  >=  12 )  {
    wishloc  =  ( 'Selamat Siang' )
  }
  jika  ( waktu  >=  16 )  {
    wishloc  =  ( '️Selamat sore' )
  }
  jika  ( waktu  >=  23 )  {
    wishloc  =  ( 'Penunggang Malam' )
  }
  kembalikan  harapan
}

 fungsi  async genProfile ( samb ,  m )  {
  biarkan  font  =  menunggu  jimp . loadFont ( './names.fnt' ) ,
    topeng  =  menunggu  jimp . baca ( 'https://i.imgur.com/552kzaW.png' ) ,
    selamat datang  =  tunggu  jimp . baca ( thumbnailUrl . getRandom ( ) ) ,
    avatar  =  tunggu  jimp . read ( menunggu  samb . profilePictureUrl ( m . sender ,  'image' ) . catch ( ( )  =>  'https://telegra.ph/file/24fa902ead26340f3df2c.png ' ) ,
    status  =  ( menunggu  samb . fetchStatus ( m . sender ) .catch ( console . log ) || { } ) . _ status ?. irisan ( 0 , 30 ) || 'Tidak terdeteksi'     

    menunggu  avatarnya . mengubah ukuran ( 460 ,  460 )
    menunggu  topeng . mengubah ukuran ( 460 ,  460 )
    menunggu  avatarnya . topeng ( masker )
    menunggu  selamat datang . ubah ukuran ( selamat datang . getWidth ( ) ,  selamat datang . getHeight ( ) )

    menunggu  selamat datang . cetak ( font ,  550 ,  180 ,  'Nama:' )
    menunggu  selamat datang . print ( font ,  650 ,  255 ,  m . pushName . slice ( 0 ,  25 ) )
    menunggu  selamat datang . cetak ( font ,  550 ,  340 ,  'Tentang:' )
    menunggu  selamat datang . cetak ( font ,  650 ,  415 ,  status )
    menunggu  selamat datang . cetak ( font ,  550 ,  500 ,  'Nomor:' )
    menunggu  selamat datang . print ( font ,  650 ,  575 ,  PhoneNumber ( '+'  +  m . sender . split ( '@' ) [ 0 ] ) . getNumber ( 'international' ) )
    kembali  menunggu  selamat datang . komposit ( avatar ,  50 ,  170 ) . getBufferAsync ( 'gambar/png' )
}
