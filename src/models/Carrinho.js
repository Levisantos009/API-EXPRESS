import mongoose from "mongoose";

const carrinhoSchema = new mongoose.Schema({

        id : {type : String},
        usuario : {type : mongoose.Schema.Types.ObjectId, ref:"usuarios" , required : true},
        produto : {type : mongoose.Schema.Types.Array, ref:"produtos" , required : false},
        status : {type : String, enum: ['comprado', 'salvo'] }
    },

    {"versionKey" : false}
);

const carrinhos = mongoose.model("carrinhos", carrinhoSchema);

export default carrinhos;
