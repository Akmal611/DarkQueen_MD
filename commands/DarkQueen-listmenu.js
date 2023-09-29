const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')

//---------------------------------------------------------------------------

cmd({

            pattern: "1",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🧞‍♀️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ᴅᴏᴡɴʟᴏᴀᴅᴇʀ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├🧜‍♂️⃟➤ɪᴏꜱ
┃ ├🧜‍♂️⃟➤ɪᴏꜱᴛ
┃ ├🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├🧜‍♂️⃟➤ʏᴛꜱ
┃ ├🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├🧜‍♂️⃟➤ꜱꜱ
┃ ├🧜‍♂️⃟➤ꜰʙ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├🧜‍♂️⃟➤ꜰʙꜱ
┃ ├🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗╾╾╾╾╾╾╾╾╾╾╾╾╾╾╾✦
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "2",

            desc: "🧜‍♂️🧜‍♂️2",

            category: "list",

            react: "🧜‍♂️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "Info",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ɢᴇɴᴇʀᴀʟ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴀʟɪᴠᴇ
┃ ├🧜‍♂️⃟➤ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┃ ├🧜‍♂️⃟➤ꜱᴛᴀᴛᴜꜱ
┃ ├🧜‍♂️⃟➤ꜱʏꜱᴛᴇᴍ
┃ ├🧜‍♂️⃟➤ʜᴇʟᴘ
┃ ├🧜‍♂️⃟➤ʟɪꜱᴛ
┃ ├🧜‍♂️⃟➤ᴏᴡɴᴇʀ
┃ ├🧜‍♂️⃟➤ꜰɪʟᴇ
┃ ├🧜‍♂️⃟➤ᴘɪɴɢ
┃ ├🧜‍♂️⃟➤ᴀʟɪᴠᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    

    

    //---------------------------------------------------------------------------

cmd({

            pattern: "3",
            alias: [""],

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌐",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ɢʀᴏᴜᴘ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ꜱᴛɪᴄᴋᴇʀ
┃ ├🧜‍♂️⃟➤ꜱᴜᴘᴘᴏʀᴛ
┃ ├🧜‍♂️⃟➤ᴡᴀʀɴ
┃ ├🧜‍♂️⃟➤ᴛᴀɢᴀʟʟ
┃ ├🧜‍♂️⃟➤ʀᴇϙᴜᴇꜱᴛ
┃ ├🧜‍♂️⃟➤ʀᴇᴛʀɪᴠᴇ
┃ ├🧜‍♂️⃟➤ʀᴇꜱᴇᴛᴡᴀʀɴ
┃ ├🧜‍♂️⃟➤ᴘᴏʟʟ
┃ ├🧜‍♂️⃟➤ᴘʀᴏꜰɪʟᴇ
┃ ├🧜‍♂️⃟➤ʀᴀɴᴋ
┃ ├🧜‍♂️⃟➤ᴘʀᴏᴍᴏᴛᴇ
┃ ├🧜‍♂️⃟➤ᴋɪᴄᴋ
┃ ├🧜‍♂️⃟➤ᴍᴇᴍᴇɢᴇɴ
┃ ├🧜‍♂️⃟➤ɢʀᴏᴜᴘ
┃ ├🧜‍♂️⃟➤ɢʀᴏᴜᴘᴘɪᴄ
┃ ├🧜‍♂️⃟➤ʜɪᴅᴇᴛᴀɢ
┃ ├🧜‍♂️⃟➤ᴀᴅᴅ
┃ ├🧜‍♂️⃟➤ɢᴇᴛᴊɪᴅꜱ
┃ ├🧜‍♂️⃟➤ᴅᴇᴍᴏᴛᴇ
┃ ├🧜‍♂️⃟➤ᴅᴇʟ
┃ ├🧜‍♂️⃟➤ᴄʜᴇᴄᴋᴡᴀʀɴ
┃ ├🧜‍♂️⃟➤ʙʀᴏᴀᴅᴄᴀꜱᴛ
┃ ├🧜‍♂️⃟➤ᴀɴᴛɪʟɪɴᴋ
┃ ├🧜‍♂️⃟➤ᴀᴄᴛ
┃ ├🧜‍♂️⃟➤ᴅᴇᴀᴄᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "4",

            desc: "(menu cmdlist).",

            category: "list",

            react: "⚙️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ᴛᴇxᴛᴘʀᴏ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴅᴇᴇᴘꜱᴇᴀ
┃ ├🧜‍♂️⃟➤ʜᴏʀʀᴏʀ
┃ ├🧜‍♂️⃟➤ᴡʜɪᴛᴇʙᴇᴀʀ
┃ ├🧜‍♂️⃟➤ᴊᴏᴋᴇʀ
┃ ├🧜‍♂️⃟➤ᴍᴇᴛᴀʟʟɪᴄ
┃ ├🧜‍♂️⃟➤ꜱᴛᴇᴇʟ
┃ ├🧜‍♂️⃟➤ʜᴀʀʀʏᴘᴏᴛᴛᴇʀ
┃ ├🧜‍♂️⃟➤ᴜɴᴅᴇʀᴡᴀᴛᴇʀ
┃ ├🧜‍♂️⃟➤ʟᴜxᴜʀʏ
┃ ├🧜‍♂️⃟➤ɢʟᴜᴇ
┃ ├🧜‍♂️⃟➤ꜰᴀʙʀɪᴄ
┃ ├🧜‍♂️⃟➤ᴛᴏxɪᴄ
┃ ├🧜‍♂️⃟➤ᴀɴᴄɪᴇɴᴛ
┃ ├🧜‍♂️⃟➤ᴄʟᴏᴜᴅ
┃ ├🧜‍♂️⃟➤ᴛʀᴀɴꜱꜰᴏʀᴍᴇʀ
┃ ├🧜‍♂️⃟➤ᴛʜᴜɴᴅᴇʀ
┃ ├🧜‍♂️⃟➤ꜱᴄɪꜰɪ
┃ ├🧜‍♂️⃟➤ꜱᴀɴᴅ
┃ ├🧜‍♂️⃟➤ʀᴀɪɴʙᴏᴡ
┃ ├🧜‍♂️⃟➤ᴘᴇɴᴄɪʟ
┃ ├🧜‍♂️⃟➤ɴᴇᴏɴ
┃ ├🧜‍♂️⃟➤ᴍᴀɢᴍᴀ
┃ ├🧜‍♂️⃟➤ʟᴇᴀᴠᴇꜱ
┃ ├🧜‍♂️⃟➤ɢʟɪᴛᴄʜ
┃ ├🧜‍♂️⃟➤ᴅɪꜱᴄᴏᴠᴇʀʏ
┃ ├🧜‍♂️⃟➤ᴄʜʀɪꜱᴛᴍᴀꜱ
┃ ├🧜‍♂️⃟➤ᴄᴀɴᴅʏ
┃ ├🧜‍♂️⃟➤1917
┃ ├🧜‍♂️⃟➤ɴᴇᴡᴛᴇxᴛ
┃ ├🧜‍♂️⃟➤ʙʟᴀᴄᴋᴘɪɴᴋ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "5",

            desc: "(menu cmdlist).",

            category: "list",

            react: "😾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}promote 94703657140`,

                    buttonText: {

                        displayText: "Get Admin",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ᴄᴏɴᴠᴇʀᴛᴇʀ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴘᴀꜱᴛᴇʙɪɴ
┃ ├🧜‍♂️⃟➤ᴘᴀꜱᴛᴇ
┃ ├🧜‍♂️⃟➤ᴘʜᴏᴛᴏ
┃ ├🧜‍♂️⃟➤ϙᴜᴏᴛᴇʟʏ
┃ ├🧜‍♂️⃟➤ꜰᴀɴᴄʏ
┃ ├🧜‍♂️⃟➤ᴛɪɴʏ
┃ ├🧜‍♂️⃟➤ᴛᴏᴀᴜᴅɪᴏ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {


            });

        }

    )

//----------------------------------------------------------------------

cmd({

            pattern: "menu",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🧞‍♀️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "System",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}ping`,

                    buttonText: {

                        displayText: "Ping",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
❍═════════════════════❍
   *_𝙳𝙰𝚁𝙺 𝚀𝚄𝙴𝙴𝙽 𝙼𝙴𝙽𝚄 𝙻𝙸𝚂𝚃_*

┏⃞❑⃝🦹⃟➥.1 *ᴅᴏᴡɴʟᴏᴅᴇʀ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🦸⃟➥.2 *ɢᴇɴᴇʀᴀʟ ᴍᴇɴᴜ*
┃
┣⃞❑⃝🧞‍♀️⃟➥.3 *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┃
┣⃞❑🧜‍♂️➥.4 *ᴛᴇxᴛᴘʀᴏ ᴍᴇɴᴜ*
┃
┣⃞❑🧜‍♀️➥.5 *ᴄᴏɴᴠᴇʀᴛᴇʀ ᴍᴇɴᴜ*
┃
┣❑🍁➥.6 *ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴇɴᴜ*
┃
┣❑💕➥.7 *ɴᴇᴡꜱ ᴍᴇɴᴜ*
┃
┣❑🧚‍♂️➥.8 *ɢᴀᴍᴇ ᴍᴇɴᴜ*
┃
┣❑🎩➥.9 *ᴀᴜᴅɪᴏ ᴍᴇɴᴜ*
┃
┣❑🎭➥.10 *ꜱᴛɪᴄᴋᴇʀ ᴍᴇɴᴜ*
┃
┣❑🦂➥.11 *ᴀʟʟ ᴍᴇɴᴜ*
┃
┣❑❄️➥.12 *ꜱᴇᴀʀᴄʜ ᴍᴇɴᴜ*
┃
┣❑🐲➥.13 *ɴꜱꜰᴡ ᴍᴇɴᴜ*
┃
┣❑😈➥.14 *ʀᴇᴀᴄᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣❑🐍➥.15 *ᴍᴏᴅᴇʀᴀᴛɪᴏɴ ᴍᴇɴᴜ*
┃
┣❑🌿➥.16 *ɢᴇɴ ᴍᴇɴᴜ*
┃
┣❑🐉➥.17 *ᴡᴇᴇʙ ᴍᴇɴᴜ*
┃
┗❑🔖➥.18 *ᴍɪꜱᴄ ᴍᴇɴᴜ*
❍═════════════════════❍
🎩 *_ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴍᴅ_*🎩
🎭 *_ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀʀᴋ Qᴜᴇᴇɴ ᴛᴇᴀᴍ_*🎭
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "#5",

            desc: "#2",

            category: "list",

            react: "📂",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}git`,

                    buttonText: {

                        displayText: "Github",

                    },

                    type: 1,

                },

                  {

                    buttonId: `${prefix}system`,

                    buttonText: {

                        displayText: "Info",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ᴍɪꜱᴄ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ꜰʙ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴜɴʙᴀɴ
┃ ├🧜‍♂️⃟➤ᴜʀʟ
┃ ├🧜‍♂️⃟➤ᴛʀᴛ
┃ ├🧜‍♂️⃟➤ᴠᴠ
┃ ├🧜‍♂️⃟➤ᴄʜᴀᴛ
┃ ├🧜‍♂️⃟➤ᴅᴀʟʟᴇ
┃ ├🧜‍♂️⃟➤ʀᴇᴘᴏ
┃ ├🧜‍♂️⃟➤ꜱᴛᴀᴛᴜꜱ
┃ ├🧜‍♂️⃟➤ᴛʜᴇᴍᴇ
┃ ├🧜‍♂️⃟➤ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ
┃ ├🧜‍♂️⃟➤ꜱᴇᴛɢᴏᴏᴅʙʏᴇ
┃ ├🧜‍♂️⃟➤ᴇxᴇᴄ
┃ ├🧜‍♂️⃟➤ʀᴇᴀᴅᴍᴏʀᴇ
┃ ├🧜‍♂️⃟➤ᴜᴘᴛɪᴍᴇ
┃ ├🧜‍♂️⃟➤ᴡᴍ
┃ ├🧜‍♂️⃟➤ᴘɪᴄᴋ
┃ ├🧜‍♂️⃟➤ꜰʟɪᴘᴛᴇxᴛ
┃ ├🧜‍♂️⃟➤ᴍᴘ4ꜰʀᴏᴍᴜʀʟ
┃ ├🧜‍♂️⃟➤ᴇᴍɪx
┃ ├🧜‍♂️⃟➤ᴄʜᴀᴛʙᴏᴛ
┃ ├🧜‍♂️⃟➤ᴇʙɪɴᴀʀʏ
┃ ├🧜‍♂️⃟➤ᴅʙɪɴᴀʀʏ
┃ ├🧜‍♂️⃟➤ʙᴏᴛ
┃ ├🧜‍♂️⃟➤ᴜɴʙᴀɴ
┃ ├🧜‍♂️⃟➤ᴜʀʟ
┃ ├🧜‍♂️⃟➤ᴛʀᴛ
┃ ├🧜‍♂️⃟➤ᴜᴘᴅᴀᴛᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦

`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

    

    

    //---------------------------------------------------------------------------

cmd({

            pattern: "#2",
            alias: [""],

            desc: "(menu cmdlist).",

            category: "list",

            react: "🌐",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {


            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ɢᴇɴᴇʀᴀʟ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴀʟɪᴠᴇ
┃ ├🧜‍♂️⃟➤ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ
┃ ├🧜‍♂️⃟➤ꜱᴛᴀᴛᴜꜱ
┃ ├🧜‍♂️⃟➤ꜱʏꜱᴛᴇᴍ
┃ ├🧜‍♂️⃟➤ʜᴇʟᴘ
┃ ├🧜‍♂️⃟➤ʟɪꜱᴛ
┃ ├🧜‍♂️⃟➤ᴏᴡɴᴇʀ
┃ ├🧜‍♂️⃟➤ꜰɪʟᴇ
┃ ├🧜‍♂️⃟➤ᴘɪɴɢ
┃ ├🧜‍♂️⃟➤ᴀʟɪᴠᴇ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━━✦
`,

                footer: tlang().footer,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "#1",

            desc: "(menu cmdlist).",

            category: "list",

            react: "⚙️",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `

┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ᴅᴏᴡɴʟᴏᴀᴅᴇʀ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├🧜‍♂️⃟➤ɪᴏꜱ
┃ ├🧜‍♂️⃟➤ɪᴏꜱᴛ
┃ ├🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├🧜‍♂️⃟➤ʏᴛꜱ
┃ ├🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├🧜‍♂️⃟➤ꜱꜱ
┃ ├🧜‍♂️⃟➤ꜰʙ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├🧜‍♂️⃟➤ꜰʙꜱ
┃ ├🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━✦
`,


                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {

                quoted: citel,

            });

        }

    )

//---------------------------------------------------------------------------

cmd({

            pattern: "#2",

            desc: "(menu cmdlist).",

            category: "list",

            react: "😾",

            filename: __filename,

            use: '<faded-Alan walker.>',

        },

        async(Void, citel, text) => {

         

            let buttons = [{

                    buttonId: `${prefix}promote 94703657140`,

                    buttonText: {

                        displayText: "Get Admin",

                    },

                    type: 1,

                },

            ];

            let buttonMessage = {

                image: {

                    url: await botpic(),

                },

                caption: `
┏━━━━━━━━━━━━━━━✦
┃ ┌╼╼╼╼╼╼╼╼╼╼●
┃ │ ●❮⃟🧚‍♂️ᴅᴏᴡɴʟᴏᴀᴅᴇʀ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴅᴏᴡɴᴀᴘᴋ
┃ ├🧜‍♂️⃟➤ɪᴏꜱ
┃ ├🧜‍♂️⃟➤ɪᴏꜱᴛ
┃ ├🧜‍♂️⃟➤ɴᴀꜱᴀ
┃ ├🧜‍♂️⃟➤ᴡᴀʙᴇᴛᴀ
┃ ├🧜‍♂️⃟➤ᴛᴛꜱ
┃ ├🧜‍♂️⃟➤ʏᴛꜱ
┃ ├🧜‍♂️⃟➤ᴠɪᴅᴇᴏ
┃ ├🧜‍♂️⃟➤ᴘʟᴀʏ
┃ ├🧜‍♂️⃟➤ʀɪɴɢᴛᴏɴᴇ
┃ ├🧜‍♂️⃟➤ᴘɪɴᴛ
┃ ├🧜‍♂️⃟➤ᴍᴇᴅɪᴀꜰɪʀᴇ
┃ ├🧜‍♂️⃟➤ʏᴛᴍᴘ4
┃ ├🧜‍♂️⃟➤ʏᴛᴍᴘ3
┃ ├🧜‍♂️⃟➤ʏᴛᴅᴏᴄ
┃ ├🧜‍♂️⃟➤ꜱꜱ
┃ ├🧜‍♂️⃟➤ꜰʙ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴛᴠɪᴅᴇᴏ
┃ ├🧜‍♂️⃟➤ꜰʙꜱ
┃ ├🧜‍♂️⃟➤ᴅᴀᴅᴜ
┃ ├🧜‍♂️⃟➤ᴛᴛᴘ
┃ ├🧜‍♂️⃟➤ᴠɪᴅᴇᴏ3
┃ ├🧜‍♂️⃟➤ᴛᴇꜱᴛꜱᴏɴɢ
┃ ├🧜‍♂️⃟➤ᴀᴛᴛᴘ
┃ ├🧜‍♂️⃟➤ᴛɪᴋᴛᴏᴋ
┃ ├🧜‍♂️⃟➤ᴘʟᴀʏʟɪꜱᴛ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━✦
`,

                footer: tlang().footer,

                buttons: buttons,

                headerType: 4,

            };

            return Void.sendMessage(citel.chat, buttonMessage, {


            });

        }

    )
