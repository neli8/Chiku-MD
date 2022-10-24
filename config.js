const fs = require("fs")
const chalk = require("chalk")

global.available = true
global.autoReadGc = true
global.autoReadAll = false
global.antitags = true


global.Owner = ['212645830816']
global.OwnerNumber = ['212645830816']
global.ownertag = ['212645830816']
global.BotName = "⚡ 𝐍𝐨𝐞𝐥 𝐒𝐚𝐦𝐚 ⚡"
global.packname = "🌊 𝐍𝐨𝐞𝐥 𝐁𝐨𝐭 🌊"
global.author = "★212645830816★"
global.OwnerName = "🍷 𝐝𝐚𝐛𝐢-𝐬𝐚𝐧 🍷"
global.BotSourceCode = "https://instagram.com/m_o_s_71?igshid=YmMyMTA2M2Y="
global.SupportGroupLink = "https://www.tiktok.com/@dabi2392?_t=8WXNM1DZSGU&_r=1"
global.sessionName = "session"

// Prefix //
// 🎗don't change the prefix if you can change the prefix may be bot doesn't work properly//
global.prefa = ['-'] 


global.location = "bihar, India"
global.reactmoji = "🌚"
global.themeemoji = "🍭"
global.vidmenu = { url: 'https://c.tenor.com/YGuLegQWubwAAAPo/miku-nakano-gotoubun-no-hanayome.mp4' }
global.websitex = "https://chat.whatsapp.com/CMp1e9NHmHU5K5sCM2mmKn"
global.lolhuman = "KaysaS"


global.BotLogo = fs.readFileSync("./Assets/pic1.jpg")
global.Thumb = fs.readFileSync("./Assets/pic9.jpg")
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg")
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg")


global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


global.mess = {
    jobdone: '*｢تم ✓｣*',
    useradmin: '*｢⚡هذه الميزه للمشرفين فقط⚡｣*',
    botadmin: '*｢⚡أعطيني اشراف لتفعيل الأمر⚡｣*',
    botowner: '*｢⚡هذه الميزه للمالك فقط⚡｣*',
    grouponly: '*｢⚡هذه الميزه بالقروبات فقط⚡｣*',
    privateonly: '*｢⚡الميزه هاذه في الخاص بس⚡」*!',
    botonly: '*｢⚡هذه الميزه للبوت فقط⚡｣*',
    waiting: '*｢⚡انتظر قليل.......｣*',
    nolink: '*｢⚡أين هو الرابط؟⚡｣*',
    error: '*｢⚡حصل ايـــــERORــــرور!⚡｣*',
    banned: ' *「⚡انت محظور من استخدام البوت اتواصل مع المطور لالغاء حظرك⚡」*!',
    bangc: '*「⚡تم حظر الجروب دا من استخدام البوت⚡」*!',
    nonsfw: '*「⚡أيها منحرف هذه المجموعه ليست لاباحي⚡」*!'
    
}


global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}


global.APIs = {
	zenz: 'https://zenzapis.xyz',
}
global.APIKeys = {
	'https://zenzapis.xyz': '5d1197db351b',
}


global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
