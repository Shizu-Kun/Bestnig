/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Siapa Yang Mau Di Berhentikan Sebagai User Premium?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = text + '@s.whatsapp.net'
    if (!who) throw 'Tag??'
    let users = global.db.data.users
    users[who].premium = false
    users[who].premiumTime = 0
    conn.reply(m.chat, 'Done!', m)
}
handler.help = ['delprem']
handler.tags = ['owner']
handler.command = /^delprem(user)?$/i
handler.rowner = true

export default handler