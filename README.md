# Ruen

[English](#intro) | [中文](#介紹)

## Intro

This is a Tauri-based cross-platform desktop application that combines ChatGPT technology. Its purpose is to help people use AI more purposefully and speed up their workflow, such as translation, proofreading, and data organization, etc. One of its advantages is that it allows users to use their own personal key, which eliminates the need for queuing online. In addition, data is transmitted directly to OpenAI without passing through Ruen's server, thus ensuring no privacy concerns.

## Recommended IDE

- [VS Code](https://code.visualstudio.com/)

## Tech Stack

**Client:** Tauri, React, TypeScript, TailwindCSS, React Router

**Development:** Vite, Eslint, Prettier, Husky, Commitlint

## FAQ

#### I have been using nvm and git GUI (Sourcetree, Fork etc.), but when committing I get fail: npx command not found.

This is because nvm can cause changes in the execution path of npx. You need to reassign the execution path of npx in `~/.huskyrc`.

```
echo "# ~/.huskyrc\n# This loads nvm.sh and sets the correct PATH before running hook\nexport NVM_DIR=\"$HOME/.nvm\"\n[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\"" > ~/.huskyrc
```

---

## 介紹

這是一個基於 tauri 的跨平台桌面應用程式，結合了 chatGPT ，目的是讓人更具有目的的使用 AI 加速工作流程，譬如翻譯、校稿、資料整理...等，優點在於使用自己的 personal key ，不再需要排隊，且資料會直接傳遞至 OpenAI ，不會經過 Ruen 的伺服器，沒有隱私的疑慮。

## 建議的 IDE

- [VS Code](https://code.visualstudio.com/)

## 技術

**客戶端:** Tauri, React, TypeScript, TailwindCSS, React Router

**開發端:** Vite, Eslint, Prettier, Husky, Commitlint

## 問與答

#### 我使用了 nvm 和 Git GUI (Sourcetree、Fork 等)，但是當我嘗試提交 ( commit) 時，出現了錯誤：npx command not found。

答：這是因為 nvm 改變了 npx 的執行路徑。因此，你需要在 `~/.huskyrc` 中重新指定 npx 的執行路徑。

```
echo "# ~/.huskyrc\n# This loads nvm.sh and sets the correct PATH before running hook\nexport NVM_DIR=\"$HOME/.nvm\"\n[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\"" > ~/.huskyrc
```
