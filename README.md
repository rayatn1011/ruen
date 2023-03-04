# Project Title

A brief description of what this project does and who it's for

## Recommended IDE

- [VS Code](https://code.visualstudio.com/)

## FAQ

#### I have been using nvm and git GUI (Sourcetree, Fork etc.), but when committing I get fail: npx command not found.

This is because nvm can cause changes in the execution path of npx. You need to reassign the execution path of npx in `~/.huskyrc`.

```
echo "# ~/.huskyrc\n# This loads nvm.sh and sets the correct PATH before running hook\nexport NVM_DIR=\"$HOME/.nvm\"\n[ -s \"$NVM_DIR/nvm.sh\" ] && \. \"$NVM_DIR/nvm.sh\"" > ~/.huskyrc
```