import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize-client.js';

export class Admin extends Model {}

Admin.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'admin',
  }
)