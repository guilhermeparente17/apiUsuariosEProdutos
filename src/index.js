const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://localhost:root@mongodb.g4efr.mongodb.net/mongoDB?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology:true})
.then(() => console.log("Banco conectado"))

app.use(require("./routes"))

app.listen(3333, console.log("servidor rodando"))