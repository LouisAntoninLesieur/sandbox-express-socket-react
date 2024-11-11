import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize-client.js';

export class Message extends Model {}

Message.init(
  {
    sender_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'messages',
  }
);