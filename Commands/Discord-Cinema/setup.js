module.exports = {
  name: "cinema-setup",
  description: `Setup an event`,
  developer: true,
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
    // let filter = m => m.author.id === message.author.id
    //     message.channel.send(`Are you sure to delete all data? \`YES\` / \`NO\``).then(() => {
    //       message.channel.awaitMessages(filter, {
    //           max: 1,
    //           time: 30000,
    //           errors: ['time']
    //         })
    //         .then(message => {
    //           message = message.first()
    //           if (message.content.toUpperCase() == 'YES' || message.content.toUpperCase() == 'Y') {
    //             message.channel.send(`Deleted`)
    //           } else if (message.content.toUpperCase() == 'NO' || message.content.toUpperCase() == 'N') {
    //             message.channel.send(`Terminated`)
    //           } else {
    //             message.channel.send(`Terminated: Invalid Response`)
    //           }
    //         })
    //         .catch(collected => {
    //             message.channel.send('Timeout');
    //         });
    //     })
  },
};
