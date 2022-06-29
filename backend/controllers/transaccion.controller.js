const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.createTransaccion = async (req, res) =>{
    var transaccion = new Transaccion(req.body);
    try{
        await transaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transaccion guardado'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getTransacciones = async (req, res) =>{
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.getTransaccion = async (req, res) => {
    let emailCliente = req.params.emailCliente;
    const transaccion = await Transaccion.find({'emailCliente': emailCliente});
    res.json(transaccion);
}

transaccionCtrl.getTransaccionXod = async (req, res) =>{
    let monedaOrigen = req.params.monedaOrigen;
    let monedaDestino = req.params.monedaDestino;
    const transaccion = await Transaccion.find({$and:[{'monedaOrigen': monedaOrigen},{'monedaDestino': monedaDestino}]});
    res.json(transaccion);
}

module.exports = transaccionCtrl;