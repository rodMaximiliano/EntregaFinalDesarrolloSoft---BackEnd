import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Comentario = sequelize.define('Comentario', {
  texto: { 
    type: DataTypes.TEXT, 
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

export default Comentario;