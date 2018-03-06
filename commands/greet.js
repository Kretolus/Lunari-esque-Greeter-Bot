/**
 * Created by kretolus on 05.03.18.
 */
module.exports = {
    name: 'greet',
    owner_only: true,
    cooldown: 601,
    description: 'Deploys a special greeting.',
    execute(logger, client, message) {
        message.guild.fetchMember(client.user).then((member) => {
            member.setNickname('General Kenobi')
                .then((member) => {
                    client.user.setAvatar('./icons/general_kenobi.png')
                        .then((user) => {
                            message.channel.send('Hello there!').then(() => {
                                member.setNickname('Lunari-esque Greeter Bot')
                                    .then((member) => {})
                                    .catch(logger.error);
                                user.setAvatar('./icons/bot-img.png')
                                    .then((user) => {})
                                    .catch(logger.error);
                            }).catch(logger.error);
                        })
                        .catch(logger.error);
                }).catch(logger.error);
        });
    },
};
