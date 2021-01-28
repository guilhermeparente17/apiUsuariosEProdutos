const User = require("../models/Users")

module.exports = {
    async index(req,res){
        try {
            const user = await User.find()
            return res.status(200).json(user)
        } catch (error) {
            console.log(error)
        }
    },
    async register(req,res){
        try {
            const { email, senha } = req.body
            const user = await User.create({
                email,
                senha
            })
            return res.status(201).json(user)
        } catch (error) {
            console.log(error)
        }
    }
}