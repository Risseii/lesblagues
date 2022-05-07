//importando el modelo de estudiante
const { db } = require("../models/chiste.model");
const Broma = require("../models/chiste.model"); //no se coloca el .js

//exportando 
module.exports.findAllBromas = (req,res) => {
    Broma.find() 
        .then(allBromas => res.json({broma: allBromas})) 
        .catch(err => res.json({message: "Hubo un error" + err}));

};

//Regresa una broma en base a su id
module.exports.findOneBroma = (req, res) => {
    Broma.findOne({_id: req.params.id}) //del request(peticion) se obtiene los parametros de id,este debe coincidir con el de rutas
        .then(oneBroma => res.json({broma: oneBroma})) 
        .catch(err => res.json({message: "Hubo un error" + err}));
}

module.exports.findOneRandom = (req, res) => {
    Broma.aggregate([{$sample:{size:1}}])
        .then(broma => res.json({chiste:broma}))
        .catch(err => res.json({message: "Hubo un error" + err}));
}

//Crea uuna broma
module.exports.createBroma = (req, res) => {
    Broma.create(req.body)
        .then(newBroma => res.json({broma: newBroma})) 
        .catch(err => res.json({message: "Hubo un error" + err}));
}

//Se encuentra un estudiante y lo regresa
module.exports.updateBroma = (req,res) => {
    Broma.findOneAndUpdate({_id: req.params.id},req.body,{new: true,runValidators:true}) //El new:true significa que actualiza el objeto del body
        .then(actBroma => res.json({broma: actBroma})) //Promesa que cuando se cumpla
        .catch(err => res.json({message: "Hubo un error" + err }));
}

//Borrar una broma
module.exports.deleteBroma = (req, res) => {
    Broma.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Hubo un error" + err }));
}
