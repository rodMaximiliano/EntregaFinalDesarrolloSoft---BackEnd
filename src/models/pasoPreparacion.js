import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const PasoPreparacion = sequelize.define('PasoPreparacion', {
  orden: { 
    type: DataTypes.INTEGER, 
    allowNull: false
  },
  instruccion: { 
    type: DataTypes.TEXT,
    allowNull: false
  },
  id_receta: { 
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default PasoPreparacion;