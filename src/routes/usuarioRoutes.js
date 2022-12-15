import Express from "express";
import UsuarioController from "../controllers/usuarioController.js";

const router = Express.Router();

router
    .get("/usuarios", UsuarioController.listarUsuarios)
    .get("/usuarios/:id", UsuarioController.listarUsuarioPeloId)
    .post("/usuarios", UsuarioController.cadastrarUsuario)
    .post("/usuarios/login", UsuarioController.logarUsuario)
    .put("/usuarios/:id", UsuarioController.atualizarUsuario)
    .delete("/usuarios/:id", UsuarioController.deletarUsuario)

export default router
