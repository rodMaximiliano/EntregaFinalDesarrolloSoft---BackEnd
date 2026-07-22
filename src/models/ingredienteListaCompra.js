import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const IngredienteListaCompra = sequelize.define('IngredienteListaCompra', {
  cantidad: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  unidadMedida: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_listaCompra: { 
    type: DataTypes.INTEGER,
    allowNull: false
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

export default IngredienteListaCompra;