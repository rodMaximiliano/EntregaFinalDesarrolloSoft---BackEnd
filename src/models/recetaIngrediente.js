import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const RecetaIngrediente = sequelize.define('RecetaIngrediente', {
  cantidad: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  unidadMedida: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_ingrediente: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  id_receta: { 
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

export default RecetaIngrediente;