// src/routes/index.js
import { Router } from 'express';
import usuarioRoutes from './usuarioRoutes.js'
import recetaRoutes from './recetaRoutes.js'
import categoriaRoutes from './categoriaRoutes.js'
import cocinaRoutes from './cocinaRoutes.js'
import ingredienteRoutes from './ingredienteRoutes.js'
import pasoPreparacionRoutes from './pasoPreparacionRoutes.js'
import calificacionRoutes from './calificacionRoutes.js'
import comentarioRoutes from './comentarioRoutes.js'
import listaCompraRoutes from './listaCompraRoutes.js'

const router = Router();

router.use('/usuarios', usuarioRoutes);
router.use('/recetas', recetaRoutes);
router.use('/categorias', categoriaRoutes);
router.use('/cocinas', cocinaRoutes);
router.use('/ingredientes', ingredienteRoutes);
router.use('/pasoPreparaciones', pasoPreparacionRoutes);
router.use('/calificaciones', calificacionRoutes);
router.use('/comentarios', comentarioRoutes);
router.use('/listasCompras', listaCompraRoutes);

export default router;