/**
 * Created by kretolus on 05.03.18.
 */
module.exports = {
    name: 'greet',
    description: 'Deploys a special greeting.',
    execute(client, message) {
        message.guild.fetchMember(client.user).then((member) => {
            member.setNickname('General Kenobi')
                .then((member) => {
                    client.user.setAvatar('./icons/general_kenobi.png')
                        .then((user) => {
                            message.channel.send('Hello there!');
                            member.setNickname('Lunari-esque Greeter Bot')
                                .then((member) => {})
                                .catch((error) => {
                                    throw error;
                                });
                            user.setAvatar('./icons/bot-img.png')
                                .then((user) => {})
                                .catch((error) => {
                                    throw error;
                                });
                        })
                        .catch((error) => {
                            throw error;
                        });
                }).catch((error) => {
                    throw error;
                });
        });
    },
};