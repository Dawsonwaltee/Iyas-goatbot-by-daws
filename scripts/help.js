const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "";
/** 
* @author NTKhang
* @author: do not delete it
* @message if you delete or edit it you will get a global ban
*/

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "arse",
    countDown: 5,
    role: 0,
    shortDescription: {
      vi: "Xem cách dùng lệnh",
      en: "View command u`sage"
    },
    longDescription: {
      vi: "Xem cách sử dụng của các lệnh",
      en: "View command usage"
    },
    category: "info",
    guide: {
      vi: "   {pn} [để trống | <số trang> | <tên lệnh>]"
        + "\n   {pn} <command name> [-u | usage | -g | guide]: chỉ hiển thị phần hướng dẫn sử dụng lệnh"
        + "\n   {pn} <command name> [-i | info]: chỉ hiển thị phần thông tin về lệnh"
        + "\n   {pn} <command name> [-r | role]: chỉ hiển thị phần quyền hạn của lệnh"
        + "\n   {pn} <command name> [-a | alias]: chỉ hiển thị phần tên viết tắt của lệnh",
      en: "{pn} [empty | <page number> | <command name>]"
        + "\n   {pn} <command name> [-u | usage | -g | guide]: only show command usage"
        + "\n   {pn} <command name> [-i | info]: only show command info"
        + "\n   {pn} <command name> [-r | role]: only show command role"
        + "\n   {pn} <command name> [-a | alias]: only show command alias"
    },
    priority: 1
  },

  langs: {
    vi: {
      help: "╭─────────────✿\n『%1』\n├─────⭔\n│ Trang [ %2/%3 ]\n│ Hiện tại bot có %4 lệnh có thể sử dụng\n│ » Gõ %5help <số trang> để xem danh sách các lệnh\n│ » Gõ %5help để xem chi tiết cách sử dụng lệnh đó\n├────────❀\n│ %6\n╰─────────────✿",
      attechment:fs.createReadStream("anjarara.jpg"),
      help2: "%1├───────❀\n│ » Hiện tại bot có %2 lệnh có thể sử dụng\n│ » Gõ %3help <tên lệnh> để xem chi tiết cách sử dụng lệnh đó\n│ %4\n╰─────────────✿",
      commandNotFound: "Lệnh \"%1\" không tồn tại",
      getInfoCommand: "╭── NAME ────✿\n│ %1\n├── INFO\n│ Mô tả: %2\n│ Các tên gọi khác: %3\n│ Các tên gọi khác trong nhóm bạn: %4\n│ Version: %5\n│ Role: %6\n│ Thời gian mỗi lần dùng lệnh: %7s\n│ Author: %8\n├── Usage\n│%9\n├── Notes\n│ Nội dung bên trong <XXXXX> là có thể thay đổi\n│ Nội dung bên trong [a|b|c] là a hoặc b hoặc c\n╰──────❀",
      onlyInfo: "╭── INFO ────✿\n│ Tên lệnh: %1\n│ Mô tả: %2\n│ Các tên gọi khác: %3\n│ Các tên gọi khác trong nhóm bạn: %4\n│ Version: %5\n│ Role: %6\n│ Thời gian mỗi lần dùng lệnh: %7s\n│ Author: %8\n╰─────────────✿",
      onlyUsage: "╭── USAGE ────✿\n│%1\n╰─────────────✿",
      onlyAlias: "╭── ALIAS ────✿\n│ Các tên gọi khác: %1\n│ Các tên gọi khác trong nhóm bạn: %2\n╰─────────────✿",
      onlyRole: "╭── ROLE ────✿\n│%1\n╰─────────────✿",
      doNotHave: "Không có",
      roleText0: "0 (Tất cả người dùng)",
      roleText1: "1 (Quản trị viên nhóm)",
      roleText2: "2 (Admin bot)",
      roleText0setRole: "0 (set role, tất cả người dùng)",
      roleText1setRole: "1 (set role, quản trị viên nhóm)",
      pageNotFound: "Trang %1 không tồn tại"
    },
    en: {
      help: "𝐈𝐘𝐀𝐒 𝐎𝐅𝐅𝐑𝐄𝐒 \n %1 ●══════❍══════●\n 🌹𝐨𝐟𝐟𝐫𝐞𝐬 𝐝𝐞 𝐈𝐘𝐀𝐒 [%2/%3] \n🎯➳𝐯𝐨𝐢𝐜𝐢 𝐜𝐞 𝐪𝐮𝐞 𝐦𝐨𝐧 𝐦𝐚î𝐭𝐫𝐞  𝐯𝐨𝐮𝐬 𝐨𝐟𝐟𝐫𝐞 𝐜𝐨𝐦𝐦𝐞 𝐜𝐚𝐝𝐞𝐚𝐮 \n 🎯➳ 🌹♨༆ 𝐯𝐞𝐢𝐥𝐥𝐞𝐳 𝐬𝐮𝐢𝐯𝐫𝐞 𝐥𝐚 𝐩𝐚𝐠𝐞 𝐝𝐞 𝐦𝐨𝐧 𝐦𝐚𝐢𝐭𝐫𝐞 𝐞𝐧 𝐚𝐩𝐩𝐮𝐲𝐚𝐧𝐭 𝐬𝐮𝐫 𝐜𝐞 𝐥𝐢𝐞𝐧:https://www.facebook.com/profile.php?id=61565222736918\n 🎯➳ 𝐣𝐞 𝐬𝐮𝐢𝐬 𝐥𝐚̀ 𝐩𝐨𝐮𝐫 𝐭'𝐚𝐢𝐝𝐞𝐫 𝐞𝐧 𝐭𝐨𝐮𝐭 𝐞𝐭 𝐝𝐚𝐧𝐬 𝐭𝐨𝐮𝐭 \n🎯➳👋 𝐬𝐢 𝐭𝐮 𝐯𝐞𝐮𝐱 𝐞̂𝐭𝐫𝐞 𝐡𝐞𝐮𝐫𝐞𝐮𝐱 𝐭𝐨𝐮𝐭𝐞 𝐭𝐚 𝐯𝐢𝐞  𝐬𝐮𝐢𝐬 𝐥𝐞 𝐦𝐞𝐢𝐥𝐥𝐞𝐮𝐫 𝐠𝐫𝐨𝐮𝐩𝐞 𝐝𝐮 𝐦𝐨𝐧𝐝𝐞 : ꧁༺𝚘𝚝𝚊𝚔𝚞 𝚠𝚘𝚛𝚕𝚍༻꧂🥳🌺●══════❍\n🎀𝗯𝗼𝘁 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 𝗯𝘆 𝐈𝐘𝐀𝐒 𝐇𝐎𝐍𝐎𝐑𝐄.",
      help2: "☂☻ 𝐈𝐘𝐀𝐒 𝐇𝐎𝐍𝐎𝐑𝐄☃︎☂\n %1 ●══════❍══════●\n 🎯➳𝐋𝐞 𝐛𝐨𝐭 𝐝𝐢𝐬𝐩𝐨𝐬𝐞 𝐝𝐞 %4 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 \n 🎯➳👋 𝐒𝐚𝐥𝐮𝐭  𝐭𝐨𝐢 , 𝐜𝐡𝐞𝐫𝐜𝐡𝐞𝐮𝐫 𝐝𝐞 𝐛𝐨𝐧𝐡𝐞𝐮𝐫 ! 𝐬𝐮𝐢𝐬 𝐥𝐞 𝐦𝐞𝐢𝐥𝐥𝐞𝐮𝐫 𝐠𝐫𝐨𝐮𝐩𝐞 𝐝𝐮 𝐦𝐨𝐧𝐝𝐞 : ꧁༺𝚘𝚝𝚊𝚔𝚞 𝚠𝚘𝚛𝚕𝚍༻꧂ , 𝐨𝐮𝐯𝐫𝐞 𝐥𝐞𝐬 𝐩𝐨𝐫𝐭𝐞𝐬 𝐝'𝐮𝐧𝐞 𝐣𝐨𝐲𝐞𝐮𝐬𝐞 𝐜𝐨𝐦𝐦𝐮𝐧𝐚𝐮𝐭é🌹 𝐨ù 𝐫è𝐠𝐧𝐞 𝐥𝐞𝐬 é𝐜𝐥𝐚𝐭𝐬 𝐝𝐞 𝐫𝐢𝐫𝐞 𝐞𝐭 𝐝𝐞𝐬 𝐝𝐢𝐬𝐜𝐮𝐬𝐬𝐢𝐨𝐧𝐬 𝐞𝐩𝐚𝐧𝐨𝐮𝐢𝐬𝐬𝐚𝐧𝐭𝐞𝐬✨ . 𝐑𝐞𝐣𝐨𝐢𝐧𝐬-𝐧𝐨𝐮𝐬 𝐩𝐨𝐮𝐫 𝐩𝐚𝐫𝐭𝐚𝐠𝐞𝐫 𝐝𝐞𝐬 𝐦𝐨𝐦𝐞𝐧𝐭𝐬 𝐫𝐞𝐦𝐩𝐥𝐢𝐬 𝐝𝐞 𝐜𝐡𝐚𝐥𝐞𝐮𝐫 𝐞𝐭 𝐝'𝐚𝐦𝐢𝐭𝐢é 🥳🌺",
      commandNotFound: "𝗖𝗠𝗗 \"『%1』\" 𝙳𝚘𝚎𝚜 𝙴𝚡𝚒𝚜𝚝",
      getInfoCommand: "╭── NAME ────✿\n %1\n├── INFO\n│ Description: %2\n│ Other names: %3\n│ Other names in your group: %4\n│ Version: %5\n│ Role: %6\n│ Time per command: %7s\n│ Author: %8\n├── Usage\n%9\n├── Notes\n│ The content inside <XXXXX> can be changed\n│ The content inside [a|b|c] is a or b or c\n╰──────❀",
      onlyInfo: "╭── INFO ────✿\n│ Command name: %1\n│ Description: %2\n│ Other names: %3\n│ Other names in your group: %4\n│ Version: %5\n│ Role: %6\n│ Time per command: %7s\n│ Author: %8\n╰─────────────✿",
      onlyUsage: "╭── USAGE ────✿\n│%1\n╰─────────────✿",
      onlyAlias: "╭── ALIAS ────✿\n│ Other names: %1\n│ Other names in your group: %2\n╰─────────────✿",
      onlyRole: "╭── ROLE ────✿\n│%1\n╰─────────────✿",
      doNotHave: "Do not have",
      roleText0: "0 (All users)",
      roleText1: "1 (Group administrators)",
      roleText2: "2 (Admin bot)",
      roleText0setRole: "0 (set role, all users)",
      roleText1setRole: "1 (set role, group administrators)",
      pageNotFound: "Page %1 does not exist"
    }
  },

  onStart: async function ({ message, args, event, threadsData, getLang, role }) {
    const langCode = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
    let customLang = {};
    const pathCustomLang = path.normalize(`${process.cwd()}/languages/cmds/${langCode}.js`);
    if (fs.existsSync(pathCustomLang))
      customLang = require(pathCustomLang);

    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);
    let sortHelp = threadData.settings.sortHelp || "name";
    if (!["category", "name"].includes(sortHelp))
      sortHelp = "name";
    const commandName = (args[0] || "").toLowerCase();
    const command = commands.get(commandName) || commands.get(aliases.get(commandName));

    // ———————————————— LIST ALL COMMAND ——————————————— //
    if (!command && !args[0] || !isNaN(args[0])) {
      const arrayInfo = [];
      let msg = "";
      if (sortHelp == "name") {
        const page = parseInt(args[0]) || 1;
        const numberOfOnePage = 30;
        for (const [name, value] of commands) {
          if (value.config.role > 1 && role < value.config.role)
            continue;
          let describe = name;
          let shortDescription;
          const shortDescriptionCustomLang = customLang[name]?.shortDescription;
          if (shortDescriptionCustomLang != undefined)
            shortDescription = checkLangObject(shortDescriptionCustomLang, langCode);
          else if (value.config.shortDescription)
            shortDescription = checkLangObject(value.config.shortDescription, langCode);
          if (shortDescription)
            describe += `:\n 🎐★─⊰   ${cropContent(shortDescription.charAt(0).toUpperCase() + shortDescription.slice(1))}`;
          arrayInfo.push({
            data: describe,
            priority: value.priority || 0
          });
        }

        arrayInfo.sort((a, b) => a.data - b.data); // sort by name
        arrayInfo.sort((a, b) => a.priority > b.priority ? -1 : 1); // sort by priority
        const { allPage, totalPage } = global.utils.splitPage(arrayInfo, numberOfOnePage);
        if (page < 1 || page > totalPage)
          return message.reply(getLang("pageNotFound", page));

        const returnArray = allPage[page - 1] || [];
        const startNumber = (page - 1) * numberOfOnePage + 1;
        msg += (returnArray || []).reduce((text, item, index) => text += `🎐🔖➳ ${index + startNumber}${index + startNumber < 10 ? " " : "🐦"}${item.data}\n`, '').slice(0, -1);
        await message.reply(getLang("help", msg, page, totalPage, commands.size, prefix, doNotDelete));
      }
      else if (sortHelp == "category") {
  let categoryCommands = new Map(); // Map to store commands by category

  for (const [name, value] of commands) {
    if (value.config.role > 1 && role < value.config.role) {
      continue; // Skip commands the user doesn't have permission for.
    }

    const categoryName = value.config.category || "No Category";
    const circularSymbol = "\n🎐🔖➳"; // Add your desired circular symbol here

    if (!categoryCommands.has(categoryName)) {
      categoryCommands.set(categoryName, []);
    }

    categoryCommands.get(categoryName).push(`${circularSymbol} ${name}`);
  }

  for (const [category, commands] of categoryCommands) {
    msg += ` 🌹🎐★─⊰ ❀${category}❀⊱✮\n▣「${commands.join(" ")}」\n\n`;
  }

  message.reply(getLang("help2", msg, commands.size, prefix, doNotDelete));
}
    }
    // ———————————— COMMAND DOES NOT EXIST ———————————— //
    else if (!command && args[0]) {
      return message.reply(getLang("commandNotFound", args[0]));
    }
    // ————————————————— INFO COMMAND ————————————————— //
    else {
      const formSendMessage = {};
      const configCommand = command.config;

      let guide = configCommand.guide?.[langCode] || configCommand.guide?.["en"];
      if (guide == undefined)
        guide = customLang[configCommand.name]?.guide?.[langCode] || customLang[configCommand.name]?.guide?.["en"];

      guide = guide || {
        body: ""
      };
      if (typeof guide == "string")
        guide = { body: guide };
      const guideBody = guide.body
        .replace(/\{prefix\}|\{p\}/g, prefix)
        .replace(/\{name\}|\{n\}/g, configCommand.name)
        .replace(/\{pn\}/g, prefix + configCommand.name);

      const aliasesString = configCommand.aliases ? configCommand.aliases.join(", ") : getLang("doNotHave");
      const aliasesThisGroup = threadData.data.aliases ? (threadData.data.aliases[configCommand.name] || []).join(", ") : getLang("doNotHave");

      let roleOfCommand = configCommand.role;
      let roleIsSet = false;
      if (threadData.data.setRole?.[configCommand.name]) {
        roleOfCommand = threadData.data.setRole[configCommand.name];
        roleIsSet = true;
      }

      const roleText = roleOfCommand == 0 ?
        (roleIsSet ? getLang("roleText0setRole") : getLang("roleText0")) :
        roleOfCommand == 1 ?
          (roleIsSet ? getLang("roleText1setRole") : getLang("roleText1")) :
          getLang("roleText2");

      const author = configCommand.author;
      const descriptionCustomLang = customLang[configCommand.name]?.longDescription;
      let description = checkLangObject(configCommand.longDescription, langCode);
      if (description == undefined)
        if (descriptionCustomLang != undefined)
          description = checkLangObject(descriptionCustomLang, langCode);
        else
          description = getLang("doNotHave");

      let sendWithAttachment = false ; // check subcommand need send with attachment or not

      if (args[1]?.match(/^-g|guide|-u|usage$/)) {
        formSendMessage.body = getLang("onlyUsage", guideBody.split("\n").join("\n│"));
        sendWithAttachment = true;
      }
      else if (args[1]?.match(/^-a|alias|aliase|aliases$/))
        formSendMessage.body = getLang("onlyAlias", aliasesString, aliasesThisGroup);
      else if (args[1]?.match(/^-r|role$/))
        formSendMessage.body = getLang("onlyRole", roleText);
      else if (args[1]?.match(/^-i|info$/))
        formSendMessage.body = getLang("onlyInfo", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "");
      else {
        formSendMessage.body = getLang("getInfoCommand", configCommand.name, description, aliasesString, aliasesThisGroup, configCommand.version, roleText, configCommand.countDown || 1, author || "", `${guideBody.split("\n").join("\n│")}`);
        sendWithAttachment = true;
      }

      if (sendWithAttachment && guide.attachment) {
        if (typeof guide.attachment == "object" && !Array.isArray(guide.attachment)) {
          const promises = [];
          formSendMessage.attachment = [];

          for (const keyPathFile in guide.attachment) {
            const pathFile = path.normalize(keyPathFile);

            if (!fs.existsSync(pathFile)) {
              const cutDirPath = path.dirname(pathFile).split(path.sep);
              for (let i = 0; i < cutDirPath.length; i++) {
                const pathCheck = `${cutDirPath.slice(0, i + 1).join(path.sep)}${path.sep}`; // create path
                if (!fs.existsSync(pathCheck))
                  fs.mkdirSync(pathCheck); // create folder
              }
              const getFilePromise = axios.get(guide.attachment[keyPathFile], { responseType: 'arraybuffer' })
                .then(response => {
                  fs.writeFileSync(pathFile, Buffer.from(response.data));
                });

              promises.push({
                pathFile,
                getFilePromise
              });
            }
            else {
              promises.push({
                pathFile,
                getFilePromise: Promise.resolve()
              });
            }
          }

          await Promise.all(promises.map(item => item.getFilePromise));
          for (const item of promises)
            formSendMessage.attachment.push(fs.createReadStream(item.pathFile));
        }
      }

      return message.reply(formSendMessage);
    }
  }
};

function checkLangObject(data, langCode) {
  if (typeof data == "string")
    return data;
  if (typeof data == "object" && !Array.isArray(data))
    return data[langCode] || data.en || undefined;
  return undefined;
}

function cropContent(content, max) {
  if (content.length > max) {
    content = content.slice(0, max - 3);
    content = content + "...";
  }
  return content;

