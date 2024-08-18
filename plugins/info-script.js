/*
wa.me/6282285357346
github: https://github.com/sadxzyq
Instagram: https://instagram.com/tulisan.ku.id
ini wm gw cok jan di hapus
*/

let handler = async (m, {
    conn,
    text,
    args,
    command,
    usedPrefix 
}) => {
const list = `sc bot wa ini dijual 100k
`

conn.sendThumb(m.chat, list, 'https://telegra.ph/file/c1669137d4db4844a1a2b.jpg', m)
}
handler.help = handler.command = ['script','sc']
handler.tags = ['main']
export default handler