// se importa lo de controllers
const BromaController = require("../controllers/broma.controller"); //importo controller

module.exports = app => {
    app.get("/api/jokes/", BromaController.findAllBromas); //es una callback, no se coloca ()
    app.get("/api/jokes/random",BromaController.findOneRandom);
    app.get("/api/jokes/:id",BromaController.findOneBroma);
    app.post("/api/jokes/new",BromaController.createBroma);
    app.put("/api/jokes/update/:id",BromaController.updateBroma);
    app.delete("/api/jokes/delete/:id",BromaController.deleteBroma);
}
