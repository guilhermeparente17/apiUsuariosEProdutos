const { Router } = require("express")
const UserController = require("./controllers/UserControllers")
const ProdutoController = require("./controllers/ProdutoControllers")

const routes = Router()


/* ---- Rotas de Usuarios ----- */
routes.get("/users", UserController.index)
routes.post("/users", UserController.register)

/* ---- Rotas de Produtos ----- */
routes.get("/produtos", ProdutoController.index)
routes.post("/produtos", ProdutoController.register)
module.exports = routes