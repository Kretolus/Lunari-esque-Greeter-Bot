/**
 * Created by kretolus on 05.03.18.
 */
module.exports = {
    name: 'greet',
    description: 'Deploys a special greeting.',
    execute(message, client) {
        message.channel.send('Pong.');
    },
};