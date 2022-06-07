const Pasaje = require("../models/pasaje");
const pasajeCtrl = {}

pasajeCtrl.createPasaje = async (req, res) => {
    var pasaje = new Pasaje(req.body);
    try {
        await pasaje.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Pasaje guardado.'})
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'})
    }
}

pasajeCtrl.getPasajes = async (req, res) => {
    var pasajes = await Pasaje.find().populate("pasajero");
    res.json(pasajes);
}

pasajeCtrl.deletePasaje = async (req,res) =>{
    try{
        await Pasaje.deleteOne({_id: req.params.id});
        res.json({
            status: "1",
            msg: "Pasaje removed"
        })
    } catch (error){
        res.status(400).json({
            "status": "0",
            "msg": "Error procesando la operacion"
        })
    }
}

pasajeCtrl.editPasaje = async (req,res) =>{
    const vpasaje = new Pasaje(req.body);
    try{
        await Pasaje.updateOne({_id: req.body._id},vpasaje);
        res.json({
            "status": "1",
            "msg": "Pasaje updated"
        })
    } catch{
        res.status(400).json({
            "status": "0",
            "msg": "Error procesando la operacion"
        })
    }
}

pasajeCtrl.getPasaje = async (req, res) =>{
    let categoriaPasajero = req.params.categoriaPasajero;
    const pasaje = await Pasaje.find({'categoriaPasajero': categoriaPasajero});
    res.json(pasaje);

}

module.exports = pasajeCtrl;