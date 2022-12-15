import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({

        id : {type : String},
        titulo : {type : String, required : true},
        descricao : {type : String, required : true},
        valor : {type : Number}
    },

    {"versionKey" : false}

);

const produtos = mongoose.model("produtos", produtoSchema);

export default produtos;
