const mongoose = require("mongoose");

const EsquemaBroma = new mongoose.Schema({
    setup: {
        type:String, 
        required: [true,"Is required"],
        minlength: [10,"Se requiere minimo 10 caracteres"]
    },
    punchline: {
        type: String,
        required: [true,"Is required"],
        minlength: [3,"Se requiere minimo 3 caracteres"]
    }
});

const Broma = mongoose.model("bromas",EsquemaBroma); //primero va el nombre de la colección

//exporta el objeto broma y usarlo en otro archivo
module.exports = Broma; 
