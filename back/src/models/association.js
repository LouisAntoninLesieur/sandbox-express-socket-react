import { sequelize } from './sequelize-client.js';
import { Message } from './message.model.js';
import { Users } from './users.model.js';
import { Admin } from './admin.model.js';

Users.hasMany(Message, { 
  foreignKey: 'sender_id',
  as: 'sent_messages',
 });

Message.belongsTo(Users, {
  foreignKey: 'sender_id',
  as: 'sender',
});

export { sequelize, Message, Users, Admin };