
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 69 MILLION FOLLOWERS ON MY INSTAGRAM`
let img = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg'
conn.sendHydrated2(m.chat, don, '▢ MAY LORD JAGANNATH BLESS YOUR DAY\n▢ ᴳᵁᴿᵁ  ┃ ᴮᴼᵀ\n▢ Subscribe  Youtube\nhttps://www.youtube.com/@RIZKIIRFAN\n', img,'https://www.instagram.com/ikykunnnn', 'Instagram', 'https://t.me/ikybot', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
