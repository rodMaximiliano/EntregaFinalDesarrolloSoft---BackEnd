import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Receta = sequelize.define('Receta', {
  titulo: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  descripcionCorta: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  tiempoPreparacion: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tiempoCoccion: { 
    type: DataTypes.INTEGER, 
    allowNull: false,
  },
  dificultad: { 
    /* Creo que es asi */
    type: DataTypes.ENUM("facil","medio","dificil"),
    allowNull: false,
  },
  id_usuario: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_cocina: { 
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Receta;