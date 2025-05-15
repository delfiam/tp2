import express from 'express';
import usuariosController from '../controllers/usuarios.controller.js';

const router = express.Router();

router.get('/usuarios', usuariosController.getUsuarios);
router.get('/usuarios/:id', usuariosController.getUsuariosPorId);
router.post('/usuarios', usuariosController.postUsuarios);
router.patch('/usuarios/:id', usuariosController.patchUsuarios);

export default router;
