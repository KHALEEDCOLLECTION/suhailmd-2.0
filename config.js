const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348060945055";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_52_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTc2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDUxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNjUsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDYzLFxuICAgICAgICAzNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0LFxuICAgICAgICA3MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzLFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NixcbiAgICAgICAgNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNDUsXG4gICAgICAgIDM0LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE0LFxuICAgICAgICA3MixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDUxLFxuICAgICAgICA2NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTMyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZTRFWnNvTGIvNitrTXVvNjJKeXk5R2pyOExFa3RGeEx4NTVtdVU5Z040Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT2g2dkVmb3pRWDZNYlp2WFNLUHFuUVwiLFxuICBcInBob25lSWRcIjogXCJlMmVjNTRiNi1hNzJkLTQxMTctYmQ2Ni1jMDQ3OTA0MDdkMDNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc5LFxuICAgICAgNDIsXG4gICAgICAxOTQsXG4gICAgICAxMzgsXG4gICAgICA1LFxuICAgICAgMTE4LFxuICAgICAgNjQsXG4gICAgICAxMDIsXG4gICAgICAyMTEsXG4gICAgICAxNzcsXG4gICAgICAxMjAsXG4gICAgICA0NixcbiAgICAgIDE1OSxcbiAgICAgIDQwLFxuICAgICAgNzgsXG4gICAgICAyMzUsXG4gICAgICAyMjYsXG4gICAgICAxOTMsXG4gICAgICAxOTEsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAyMDAsXG4gICAgICA1NixcbiAgICAgIDI1MCxcbiAgICAgIDE4LFxuICAgICAgODUsXG4gICAgICAxNjUsXG4gICAgICAxMDcsXG4gICAgICA3NyxcbiAgICAgIDIxLFxuICAgICAgMTUxLFxuICAgICAgMjM2LFxuICAgICAgMTgsXG4gICAgICA3NyxcbiAgICAgIDgyLFxuICAgICAgMTY2LFxuICAgICAgMTMxLFxuICAgICAgMTQ0LFxuICAgICAgMjUsXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiUlhLNlFFM0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjA5NDUwNTU6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJLSEFMRUVEIENPTExFQ1RJT05cIixcbiAgICBcImxpZFwiOiBcIjk4MjM0NTc1ODg4NTgzOjEyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPd3YyZ1FoY2FLdWdZWUNDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWFBTRm1abmEyRjJQZWh0VDNSaW5SRFpGVWRNajBPdVdadUlQUHp2NDdEND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJVT0VybVhwa01FTkdGc0EvS1BwVmFseWIxOTVTdnZtemRQdG81WjY1ckprOS80ZElCWWxOR2NHTjIvbzBGa25UcExuNkI3a1A2cVNMOVlsdm93OGFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWdXFFNDZjUW93T1ZLS3pRS2EwM3ViaUJ3L2hZR0cwRHp1SkRJa3BJTXQ2SytDWldaeTRBVkkwVnBKVG9RWGJVY3ZRNHRLa21VQXJ5Z0V5ODRobUFnZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MDYwOTQ1MDU1OjEyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjQyMDM2MVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
