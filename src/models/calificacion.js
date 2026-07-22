import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Calificacion = sequelize.define('Calificacion', {
  puntaje: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  fechaPublicacion: { 
    type: DataTypes.DATE,
    allowNull: false,
  },
  id_usuario: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_receta: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
  }
});

export default Calificacion;