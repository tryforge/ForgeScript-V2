
<p align="center"><img src="https://media.discordapp.net/stickers/1185413486138904586.png?size=1024" alt="ForgeScript"></p>
<h1 align="center">ForgeScript</h1><p align="center">ForgeScript is a comprehensive package that empowers you to effortlessly interact with Discord's API. It ensures scripting remains easy to learn and consistently effective.
</p>

<p align="center">
<a href="https://github.com/tryforge/ForgeScript/"><img src="https://img.shields.io/github/package-json/v/tryforge/ForgeScript/main?label=@tryforge/forgescript&color=5c16d4" alt="@tryforge/forgescript"></a>
<a href="https://discord.gg/hcJgjzPvqb"><img src="https://img.shields.io/discord/739934735387721768?logo=discord" alt="Discord"></a>
</p>
<h2 align="center">Index</h2>
<strong>

1. [Installation](#installation)
2. [Making your first bot](#making-your-first-bot)
    1. [Client Initialization](#client-initialization)
    2. [Registering Commands](#registering-commands)
        1. [Basic registering](#basic-registering)
        2. [Registering from a root folder](#registering-from-a-root-folder)
3. [Extensions](#extensions)
4. [Limitations](#limitations)
5. [Update Frequency](#update-frequency)
6. [Function Documentation](https://docs.botforge.org/)
7. [Library Documentation](https://tryforge.github.io/ForgeScript/index.html)

</strong>

<details open>

<summary>

## Installation

</summary>

Make sure you have <strong>node.js</strong> installed, and greater than version **v16.11.0**. Once done, run **one** of the next commands in a Terminal (from any IDE or terminal):
```bash
npm i https://github.com/tryforge/ForgeScript.git
```

```bash
npm i @tryforge/forgescript
```
```bash
npm i github:tryforge/ForgeScript
```

> If installing this repository instead of npm, you must have TypeScript as dependency (`npm i typescript --save-dev`)

</details>

<details open> 

<summary>

## Making your first Bot

</summary>

This section will guide you through initializing a client and loading commands from a folder, as well as logging you into discord bot.

### Client Initialization
We will write the following for a basic bot initialization, in a `index.js` file:
```js
const { ForgeClient } = require("@tryforge/forgescript")

const client = new ForgeClient({
    intents: [
        "GuildMessages",
        "Guilds",
        "MessageContent" // This intent is privileged, must be whitelisted in dev portal, in your application.
    ],
    events: [
        "messageCreate",
        "ready"
// ...Any Other Events
    ], // Events our bot will act on
    prefixes: [
        "!",
        "?"
    ] // The prefixes to use for our bot!
})

client.login("token") // Replace token with your Discord's Application Token 
```
This will be enough to boot up our bot.

### Registering commands
Registering commands is the way to go when we want something to happen on certain events.

#### Basic registering
Let's write this after our client initialization code:
```js
client.commands.add({
    name: "user", // Not defining this creates a command that will be executed for every event fired of given type
    code: `Your name is $username!`,
    type: "messageCreate" // The event to act on
})
```

And this will register a command with name `user` that will return the name of the user that executed this command.

#### Registering from a root folder
The previous way to register commands can fill our index file with a lot of junk code, so there's a way to put files with commands in folders and load them from the index file.

1. Create a folder, with any name, and a file inside it, name it whatever you want (must end with .js) and write the following in it:
    ```js
    module.exports = {
        name: "user",
        type: "messageCreate",
        code: `Your name is $username!`
    }
    ```
    This is essentially the same as the previous command, but will be loaded from a folder!
2. Now, let's go back to our index file and write the following after client initialization (Make sure you've erased the code to register a command from index file):
    ```js
    // If using prefix only commands then use this
    client.commands.load("./<folder>");
    // If Using Application only commands then use this
    client.applicationCommands.load("./<Slashes_folder>");

    // If using Your bot supports both Prefix and Application commands then use both.
    ```
    Replace `<folder>` and `<Slashes_folder>` with the folder names you used, and every file residing in the root folder (the tree doesn't matter as long as the file is in the folder) will be loaded into your bot!
</details>

<details open>

<summary>

## Limitations

</summary>

There's currently no known limitation.
> <img align="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Warning.svg/156px-Warning.svg.png" alt="image" width="25" height="auto"> Note this library reads codes from **TOP** to **BOTTOM**, and never the opposite.
</details>
