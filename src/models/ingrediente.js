import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Ingrediente = sequelize.define('Ingrediente', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false
  }
});

export default Ingrediente;