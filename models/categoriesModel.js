const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt")
const {isPasswordSecure} = require ("../utils/validators")

const categorySchema = new mongoose.Schema({
    name: String
    })

categorySchema.statics.findByIdAndValidate = async function (id) {
    const document =await this.findById(id)
    if (!document){
        return{
            error:true,
            message: "la categoria no existe"
        }
    }
    return document
}

module.exports = mongoose.model("categorias", categorySchema ) 
