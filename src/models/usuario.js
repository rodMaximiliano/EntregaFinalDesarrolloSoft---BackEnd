import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Usuario = sequelize.define('Usuario', {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true
  },
  email: { 
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contraseña: { 
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Usuario;