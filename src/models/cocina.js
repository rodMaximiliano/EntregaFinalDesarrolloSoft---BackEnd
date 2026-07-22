import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Cocina = sequelize.define('Cocina', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false
  }
});

export default Cocina;