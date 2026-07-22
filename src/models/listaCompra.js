import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const ListaCompra = sequelize.define('ListaCompra', {
  nombre: { 
    type: DataTypes.STRING, 
    allowNull: false,
  },
  id_usuario: { 
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default ListaCompra;