const Produto = require("../models/Produtos")

module.exports = {
    async index(req,res){
        try {
            const produto = await Produto.find()
            return res.status(200).json(produto)
        } catch (error) {
            console.log(error)
        }
    },
    async register(req,res){
        try {
            const { nome, descricao, valor } = req.body
            const produto = await Produto.create({
                nome,
                descricao,
                valor
            })
            return res.status(201).json(produto)
        } catch (error) {
            console.log(error)
        }
    }
}