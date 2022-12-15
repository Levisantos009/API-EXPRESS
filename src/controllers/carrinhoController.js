import carrinhos from "../models/Carrinho.js";

class CarrinhoController {

    constructor() {};

    static listarCarrinho(req, res) {
        carrinhos.find()
                 .populate("usuario", "nome")
                 .populate("produto", "titulo")
                 .populate("produto", "valor")
                 .exec((err, carrinho) => {
                    res.status(200).json(carrinho)
                });
    }

    static listarCarrinhoPeloId(req, res) {
        let {id} = req.params
        carrinhos.findById(id)
                 .populate("usuario", "nome")
                 .populate("produto", "titulo")
                 .populate("produto", "valor")
                 .exec((err, carrinho) => {
                    if (err) {
                        res.status(400).send({message : `${err.message} - Falha ao encontrar o carrinho.`})
                    } else {
                        res.status(200).json(carrinho)
                    }
                });
    }

    static cadastrarCarrinho(req, res) {
        let carrinho = new carrinhos(req.body);
        carrinho.save(err => {
            if (err) {
                res.status(500).send({message : `${err.message} - Falha ao criar o carrinho.`})
            } else {
                res.status(201).send(carrinho.toJSON())
            }
        });
    }

    static atualizarCarrinho(req, res) {
        const {id} = req.params
        carrinhos.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (err) {
                res.status(500).send({message : `${err} - O carrinho não pôde ser atualizado!`})
            } else {  
                res.status(200).send({message : "Carrinho atualizado com sucesso!"})
            }
        });
    }

    static deletarCarrinho(req, res) {
        const {id} = req.params
        carrinhos.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message : `${err} - O carrinho não pôde ser deletado!`})
            } else {  
                res.status(200).send({message : "Carrinho deletado com sucesso!"})
            }
        });
    }

}

export default CarrinhoController;
