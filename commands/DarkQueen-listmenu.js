const os = require('os');
const { tlang, botpic,cmd, prefix, runtime,Config,formatp } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
/**cmd({
        pattern: "chatdectakag",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,Secktor>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 30) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------**/
/**cmd({
        pattern: "script",
        alias: ["git", "github", "repo"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/SamPandey001/Secktor-Md')
        let cap = `*Dark SamuZa Git*

●. *Support group :* https://chat.whatsapp.com/FuLtXVpms1LBx6RRVh8fEv

●. *Github:* https://github.com/CyberSamuZa/Dark-SamuZa

●. *Developer: https://github.com/CyberSamuZa*

★ᴘᴀsɪɴᴅᴜ-ᴍᴅ ᴏғғɪᴀᴄʟ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ★

`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            headerType: 4,
            }
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)**/

//---------------------------------------------------------------------------

cmd({

            pattern: "#3",

            desc: "(menu cmdlist).",

            category: "list",

            react: "🎲",

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
┃ │ ●❮⃟🧚‍♂️ᴡᴇᴇʙ🧚‍♂️⃟❯●
┃ ├╼╼╼╼╼╼╼╼╼╼●
┃ ├🧜‍♂️⃟➤ᴄʜᴀʀᴀᴄᴛᴇʀ
┃ ├🧜‍♂️⃟➤ʀᴀɴɪᴍᴇ
┃ ├🧜‍♂️⃟➤ᴀɴɪᴍᴇ
┃ ├🧜‍♂️⃟➤ᴀɴɪᴍᴇɴᴇᴡꜱ
┃ ├🧜‍♂️⃟➤ᴀɴɪᴍᴇᴘɪᴄ
┃ ├🧜‍♂️⃟➤ɴᴇᴋᴏ
┃ ├🧜‍♂️⃟➤ᴀɴɪᴍᴇᴡᴀʟʟ
┃ ├🧜‍♂️⃟➤ꜰᴏxɢɪʀʟ
┃ ├🧜‍♂️⃟➤ʟᴏʟɪ
┃ ├🧜‍♂️⃟➤ᴍᴀɴɢᴀ
┃ ├🧜‍♂️⃟➤ᴡᴀɪꜰᴜ
┃ ├🧜‍♂️⃟➤ᴘᴏᴋᴇᴘɪᴄ
┃ ├🧜‍♂️⃟➤ᴘᴏᴋᴇᴍᴏɴ
┃ └╼╼╼╼╼╼╼╼╼╼●
┗━━━━━━━━━━━━━━✦
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
