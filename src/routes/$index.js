import Express from "express";
import usuarios from "./usuarioRoutes.js";
import produtos from "./produtoRoutes.js";
import carrinho from "./carrinhoRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Curso de node")
    })

    app.use(
        Express.json(),
        usuarios,
        produtos,
        carrinho
    )
}

export default routes
