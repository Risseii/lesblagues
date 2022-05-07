const express = require("express");
const app = express();

//inicializar la BD
require("./server/config/mongoose.config");

//Para usar json y obtener datos de URL 
app.use(express.json(),express.urlencoded({extended:true}));

const misRutas = require("./server/routes/broma.routes"); //importo routes

misRutas(app);

//ejecutamos el server c
app.listen(8000,() => console.log("servidor listo"));