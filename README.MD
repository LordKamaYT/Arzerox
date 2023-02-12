# Arzerox
<html>
<body>
<!--StartFragment-->

![Stars](https://img.shields.io/github/stars/lordkamayt/arzerox?style=social) ![Downloads](https://img.shields.io/github/downloads/lordkamayt/arzerox/total) ![Commits](https://img.shields.io/github/commit-activity/m/lordkamayt/arzerox)

---

<!--EndFragment-->

# Table of Contents

[Arzerox](#arzerox)

[Setup with Git](#setup-with-git)

- [Setup a README file](#setup-a-readme-file)
- [Setup a Push Origin](#setup-a-push-origin)

Commit Your Code

- [Manual Commit](#manual-commit)
- [Automatic Commit](#automatic-commit)

Configuration

- [Create a .env File]()

Releases

- [V.1.0.0 Alpha Pre-Release](https://github.com/LordKamaYT/Arzerox/releases/tag/Pre-Release)
- [V2.0.0](https://github.com/LordKamaYT/Arzerox/releases/tag/V2.0.0)

# Arzerox

## Setup with Git

### Setup a README file

In order to push to github, you need to setup an origin repo.

Fistly, we'll setup a README file. ( To create your README easier, you can go [here](https://stackedit.io/app#) )This file will be used as a documentation for your bot. In order to do that open your command prompt and run

    echo "# test" >> README.md

### Setup a Push Origin

Then, we'll setup the push origin, which will permit us to add the edited code directly to GitHub using a simple command.\*

Open your command prompt and run

    git init
    git add README.md
    git commit -m "First Commit"
    git branch -M main
    git remote add origin https://github.com/username/reponame.git

By doing this action, you just put an origin to push to.
You might need to login to your GitHub account in your command prompt. Just enter what the command prompt asks, and you will have the access to push.

## Commit Your Code

Once you've setup your push origin, you will want to push everytime you change something in your code. Using Arzerox's code, you will have two options to push :

### Manual Commit

To commit your manually, you can open one of these two :

- Git Bash
- Command Prompt

Once you've opened one of them, run these three commands :

    git add *
    git commit -m "Commit Name"
    git push origin main

### Automatic Commit

You don't necessarily have to run all the commands manually, you can use one of Arzerox's automation files. To commit automatically, you will want to open one of the following :

- Git Bash
- Command Prompt

Then, you will want to run `./commit.bat` in your console.

## Configuration

### Create a .env File

Go to your `Settings` folder, and right click => Create a new file

<p align="center">
  <a href="https://bit.ly/arzerox_bot" target="blank"><img src="https://media.discordapp.net/attachments/1063751938371502100/1063752093413941268/image.png" alt="Djs" /></a>
</p>


Name it `.env` . After that, your Settings folder should look like this :
<p align="center">
  <a href="https://bit.ly/arzerox_bot" target="blank"><img src="https://media.discordapp.net/attachments/1063751938371502100/1063752849835687956/image.png" alt="Djs" /></a>
</p>


# Commands

## Create a text command

You need to create a command as `./Commands/${folder}/commandname.js`
Use this template :

```const User = require("../../Models/User");
const { Client, Message, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "commandname",
  description: `command description`,
  developer: false,
  premium: false,
  owneronly: false,
  bloxia: false,
  /**
   *
   * @param {Message} message
   * @param {*} args
   * @param {Client} client
   */
  async execute(message, args, commandName, client, Discord) {
    //Code
  },
};
```
