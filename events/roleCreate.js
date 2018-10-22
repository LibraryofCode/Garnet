const Discord = require('discord.js');

module.exports = async (client, role) => {
  const roleName = role.name;
  const roleID = role.id;
  const rolePermissions = role.permissions;
  const roleManaged = role.managed;
  const roleColor = role.hexColor;
  const guildName = role.guild.name;
  const guildID = role.guild.id;
  const guildIcon = role.guild.iconURL;

  const embed = new Discord.RichEmbed()
    .setTitle('Role Create Event')
    .setThumbnail(guildIcon)
    .setColor(roleColor)
    .addField('Role', `${roleName} \`(${roleID})\``)
    .addField('Permissions', rolePermissions, true)
    .addField('Managed', roleManaged, true)
    .addField('Guild', `${guildName} \`(${guildID})\``)
    .setFooter(client.user.username, client.user.avatarURL)
    .setTimestamp();
  client.channels.get('503828179241271306').send(embed);
    
};