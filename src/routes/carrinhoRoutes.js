import Express from "express";
import CarrinhoController from "../controllers/carrinhoController.js";

const router = Express.Router();

router
    .get("/carrinho", CarrinhoController.listarCarrinho)
    .get("/carrinho/:id", CarrinhoController.listarCarrinhoPeloId)
    .post("/carrinho", CarrinhoController.cadastrarCarrinho)
    .put("/carrinho/:id", CarrinhoController.atualizarCarrinho)
    .delete("/carrinho/:id", CarrinhoController.deletarCarrinho)

export default router
