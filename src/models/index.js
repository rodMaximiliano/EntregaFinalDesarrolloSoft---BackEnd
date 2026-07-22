import Usuario from './usuario.js'
import Receta from './receta.js'
import Categoria from './categoria.js'
import Cocina from './cocina.js'
import Ingrediente from './ingrediente.js'
import PasoPreparacion from './pasoPreparacion.js'
import Calificacion from './calificacion.js'
import Comentario from './comentario.js'
import ListaCompra from './listaCompra.js'
import IngredienteListaCompra from './ingredienteListaCompra.js'
import RecetaIngrediente from './recetaIngrediente.js'

/* Usuario - Receta 1:N */
Usuario.hasMany(Receta, {foreignKey: "id_usuario"})
Receta.belongsTo(Usuario, {foreignKey: "id_usuario"})

/* Receta - Categoria N:M */
Receta.belongsToMany(Categoria, { through: "receta_categoria", foreignKey: "id_receta" })
Categoria.belongsToMany(Receta, { through: "receta_categoria", foreignKey: "id_categoria" })

/* Cocina - Receta 1:N */
Cocina.hasMany(Receta, {foreignKey: "id_cocina"})
Receta.belongsTo(Cocina, {foreignKey: "id_receta"})

/* Recete - Ingrediente N:M */
Receta.belongsToMany(Ingrediente, {through: RecetaIngrediente, foreignKey: "id_receta"})
Ingrediente.belongsToMany(Receta, {through: RecetaIngrediente, foreignKey: "id_ingrediente"})

/* Receta - PasoPreparacion 1:N */
Receta.hasMany(PasoPreparacion, {foreignKey: "id_receta"})
PasoPreparacion.belongsTo(Receta, {foreignKey: "id_receta"})

/* Usuario - Calificacion / Receta - Calificacion 1:N */
Usuario.hasMany(Calificacion, {foreignKey: "id_usuario"})
Calificacion.belongsTo(Usuario, {foreignKey: "id_usuario"})
Receta.hasMany(Calificacion, {foreignKey: "id_receta"})
Calificacion.belongsTo(Receta, {foreignKey: "id_receta"})

/* Usuario - Comentario 1:N / Receta - Comentario */
Usuario.hasMany(Comentario, {foreignKey: "id_usuario"})
Comentario.belongsTo(Usuario, {foreignKey: "id_usuario"})
Receta.hasMany(Comentario, {foreignKey: "id_receta"})
Comentario.belongsTo(Receta, {foreignKey: "id_receta"})

/* Usuario - ListaCompra 1:N */
Usuario.hasMany(ListaCompra, {foreignKey: "id_usuario"})
ListaCompra.belongsTo(Usuario, {foreignKey: "id_usuario"})

/* Ingrediente - ListaCompra N:M */
ListaCompra.belongsToMany(Ingrediente, {through: IngredienteListaCompra, foreignKey: "id_listaCompra"})
Ingrediente.belongsToMany(ListaCompra, {through: IngredienteListaCompra, foreignKey: "id_ingrediente"})

export {
    Usuario, 
    Receta, 
    Categoria, 
    Cocina, 
    Ingrediente, 
    PasoPreparacion, 
    Calificacion, 
    Comentario,
    ListaCompra,
    IngredienteListaCompra,
    RecetaIngrediente
}




