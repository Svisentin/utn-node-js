const usuariosModel = require("../models/usersModel");
const UsuariosModel = require("../models/usersModel");
const bcrypt = require("bcrypt")
const jsonwebtoken = require ("jsonwebtoken")


const create = async function (req, res, next) {
  try {
    console.log(req.body);
    const user = new UsuariosModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    const document = await user.save();
    res.status(201).json(document);
  } catch (e) {
    next(e);
  }
}; 


const auth = async function (req, res, next) {
  try {
    const user = await usuariosModel.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ error: "El email ingresado es incorrecto" });
    }

    const passwordMatch = await bcrypt.compareSync(req.body.password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "La contraseña ingresada es incorrecta" });
    }

    const token = jsonwebtoken.sign({ userId: user._id }, req.app.get ("secretKey"), { expiresIn: "1h" });
    return res.json(token);
  } catch (e) {
    next(e);
  }
};





module.exports = {
  create,auth
};
