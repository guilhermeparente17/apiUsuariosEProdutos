const { Schema, model } = require("mongoose")

const UserSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    update: {
        type: Date,
        default: Date.now
    }
})

const User = model("User", UserSchema)

module.exports = User