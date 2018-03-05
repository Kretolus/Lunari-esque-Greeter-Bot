/**
 * Created by kretolus on 05.03.18.
 */
module.exports = {
    name: 'reset',
    owner_only: true,
    description: 'Resets the bot.',
    execute(client, message) {
        message.guild.fetchMember(client.user).then((member) => {
            member.setNickname('Lunari-esque Greeter Bot')
                .then((member) => {
                    client.user.setAvatar('./icons/bot-img.png')
                        .then((user) => {})
                        .catch((error) => {
                            throw error;
                        });
                }).catch((error) => {
                    throw error;
                });
        });
    },
};
