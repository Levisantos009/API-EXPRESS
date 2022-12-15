import usuarios from "../models/Usuario.js";

class UsuarioController {

    constructor() {};

    static listarUsuarios(req, res) {
        usuarios.find((err, usuarios) => {
            res.status(200).json(usuarios)
        });
    }

    static listarUsuarioPeloId(req, res) {
        let {id} = req.params
        usuarios.findById(id, (err, livro) => {
            if (err) {
                res.status(400).send({message : `${err.message} - Falha ao encontrar o usuário.`})
            } else {
                res.status(200).json(livro)
            }
        });
    }

    static cadastrarUsuario(req, res) {
        let usuario = new usuarios(req.body);
        usuario.save(err => {
            if (err) {
                res.status(500).send({message : `${err.message} - Falha ao cadastrar o usuario.`})
            } else {
                res.status(201).send(usuario.toJSON())
            }
        });
    }

    static logarUsuario(req, res) {
        /* AUTENTICAÇÃO APENAS DIDÁTICA, NÃO DEVE SER IMPLEMENTADA! */

        let login = req.body

        usuarios.exists({"email" : login['email']}, (err, user) => {

            if (err || user == null ) {
                res.status(404).send("Usuário não cadastrado!")
                return
            }

            usuarios.findById(user["_id"], (err, user) => {
                if (login["senha"] == user["senha"]) {
                    res.status(200).send("Usuário Logado com sucesso!")
                } else {
                    res.status(401).send("Verifique suas credenciais!")
                }
            })

        });

    }

    static atualizarUsuario(req, res) {
        const {id} = req.params
        usuarios.findByIdAndUpdate(id, {$set : req.body}, (err) => {
            if (err) {
                res.status(500).send({message : `${err} - O usuario não pôde ser atualizado!`})
            } else {  
                res.status(200).send({message : "usuario atualizado com sucesso!"})
            }
        });
    }

    static deletarUsuario(req, res) {
        const {id} = req.params
        usuarios.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message : `${err} - O usuário não pôde ser deletado!`})
            } else {  
                res.status(200).send({message : "usuário deletado com sucesso!"})
            }
        });
    }

}

export default UsuarioController;
