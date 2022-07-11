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
*Link: <https://filman.cc/wyszukiwarka?phrase=${query}>*
*Link: <https://filser.cc/catalog?q=${query}&sort=ratingcount>*
*Link: <https://zerion.cc/szukaj?query=${query}>*
*Link: <https://emovies.si/movie/search/${query}>*
*Link: <https://hdbest.net/?s=${query}>*
*Link: <https://cineb.net/search/${query}>*

*Adblock: <https://adguard.com/pl/welcome.html>*`
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