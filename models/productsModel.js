const mongoose = require("../config/mongodb");

const productsSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    codigo: Number, 
    descripcion: String,
    categoria: {
        type: mongoose.Schema.ObjectId,
        ref: "categorias",
    }


})
const productsModel = mongoose.model("productos", productsSchema)

module.exports = productsModel
