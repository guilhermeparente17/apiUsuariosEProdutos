const { Schema , model } = require("mongoose")

const ProdutosSchema = new Schema({
    nome:{
        type: String,
        require:true
    },
    descricao: {
        type: String,
        require:true
    },
    valor: {
        type: Number,
        require: true
    },
    update: {
        type: Date,
        default: Date.now
    }
})

const Produto = model("Produto", ProdutosSchema)

module.exports = Produto