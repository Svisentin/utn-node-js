
const mongoose = require("mongoose");

mongoose
.connect(`mongodb://127.0.0.1:27017/viveOutdoors`)
.then(() => {

console.log("Se conecto con la base de datos"); 
}) 

.catch((error) => console.log(error))  

module.exports = mongoose; 
