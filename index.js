const { Plugin } = require('powercord/entities');

module.exports = class Wyszukajka extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'szukaj',
            description: 'Wyszukaj film lub serial',
            aliases: ["s"],
            usage: '{c} Tytuł',
            executor: async (args) => {
                let query = encodeURI(args.join(' '))
                let treść = args.join(' ')
                let url = `**${treść}**
*Link: <https://wyszukajka.netlify.app/szukaj?q=${query}>*`
                return {
                    send: true,
                    result: url
                };
            }
        });
    }
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('szukaj');
    }
};
