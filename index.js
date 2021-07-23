const express = require('express')
var cors = require('cors')
const app = express()
var router = express.Router();
require('dotenv').config()
var bodyParser = require('body-parser')
const mongoose = require('mongoose');

app.use('/api', router)
const port = process.env.PORT;
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Base de datos//

mongoose.connect(process.env.DB_SERVER, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Success ඞ ")
});

//Base de Datos//

const registroForm = require('./Funcionalidad/Rutas/RegistroForm');

router.use('/RegistroForm',registroForm);


router.get('/', (req, res) => {
  res.send('Hola! ඞඞඞඞ')
})


app.use('/backendfinal', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
 
