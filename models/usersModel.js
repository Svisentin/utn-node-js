const mongoose = require("../config/mongodb");
const bcrypt = require("bcrypt")
const {isPasswordSecure} = require ("../utils/validators")

const mainSchema = mongoose.Schema({
    name: String,
    email: String,
    password: {
        type: String,
        validate :{
            validator: isPasswordSecure,
            message : "El {PATH} debe contener al menos 1 letra min, 1 may y 1 num "
        }
    }

})
mainSchema.pre("save", function(next){
    this.password= bcrypt.hashSync(this.password, 10)
    next ()
})
const usuariosModel = mongoose.model("usuarios", mainSchema)

module.exports = usuariosModel
