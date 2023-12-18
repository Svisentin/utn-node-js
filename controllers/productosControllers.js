const ProductsModel = require("../models/productsModel");

const getAll = async function (req, res, next) {
  try {
    const products = await ProductsModel.find().populate("categoria");
    res.json(products);
  } catch (e) {
    res.status(400);
  }
};

const getById = async function (req, res, next) {
  try {
    console.log(req.params.pepe);
    const producto = await ProductsModel.findById(req.params.pepe);
    res.json(producto);
  } catch (e) {
    next(e);
  
}
  }

const create = async function (req, res, next) {
  try {
    console.log(req.body);
    const product = new ProductsModel({
      nombre: req.body.nombre,
      precio: req.body.precio,
      codigo: req.body.codigo,
      descripcion: req.body.descripcion,
      categoria: req.body.categoria 
    });

    const document = await product.save();
    res.status(201).json(document);
  } catch (e) {
    next(e);
  }
};

const update = async function (req, res, next) {
  try {
    console.log(req.params.id);
    console.log(req.body);
    await ProductsModel.updateOne(
      { _id: req.params.id },
      req.body
    );
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};

const deleteProduct = async function (req, res, next) {
  try {
    console.log("El producto "+req.params.id + "ha sido borrado");
    await ProductsModel.deleteOne({ _id: req.params.id });
    res.status(204).end();
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteProduct,
};
