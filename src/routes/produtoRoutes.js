import Express from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = Express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .get("/produtos/:id", ProdutoController.listarProdutoPeloId)
    .post("/produtos", ProdutoController.cadastrarProduto)
    .put("/produtos/:id", ProdutoController.atualizarProduto)
    .delete("/produtos/:id", ProdutoController.deletarProduto)

export default router
