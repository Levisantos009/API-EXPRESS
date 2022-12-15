import produtos from "../models/Produto.js";

class ProdutoController {

    constructor() {};

    static listarProdutos(req, res) {
        produtos.find((err, produtos) => {
            res.status(200).json(produtos)
        });
    }

    static listarProdutoPeloId(req, res) {
        let {id} = req.params
        produtos.findById(id, (err, livro) => {
            if (err) {
                res.status(400).send({message : `${err.message} - Falha ao encontrar o produto.`})
            } else {
                res.status(200).json(livro)
            }
        });
    }

    static cadastrarProduto(req, res) {
        let produto = new produtos(req.body);
        produto.save(err => {
            if (err) {
                res.status(500).send({message : `${err.message} - Falha ao cadastrar o produto.`})
            } else {
                res.status(201).send(produto.toJSON())
            }
        });
    }

    static atualizarProduto(req, res) {
        const {id} = req.params
        produtos.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (err) {
                res.status(500).send({message : `${err} - O produto não pôde ser atualizado!`})
            } else {  
                res.status(200).send({message : "produto atualizado com sucesso!"})
            }
        });
    }

    static deletarProduto(req, res) {
        const {id} = req.params
        produtos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message : `${err} - O produto não pôde ser deletado!`})
            } else {  
                res.status(200).send({message : "produto deletado com sucesso!"})
            }
        });
    }

}

export default ProdutoController;
