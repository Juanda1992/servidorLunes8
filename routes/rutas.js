//Importar una clase de express (Router)

const { Router } = require ('express')

//Usar esa clase
const rutas=Router()

//Listado de rutas

rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.post('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.put('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

rutas.delete('/avanzada/v1/jugadores', function (req, res) {
    res.send('Hello World')
})

//exporto las rutas

module.exports=rutas