const logicaDB = require ("./logicaDB");

const crearUsuario = async (req,res) =>{
    let usuario = req.body;
    try {
        let respuesta = await logicaDB.CrearusuarioDB(usuario)
        res.status(200).json({
            'Usuario': respuesta 
        })
        return;
    } catch (error) {
        res.status(500).json({
            error
        });
        return;
    }
} 

module.exports = {
    crearUsuario,
}