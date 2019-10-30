// Framework que já puxa alguns recursos como definição de rota
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-nvstf.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

/* 1° parametro: rota que iremos executar,
*   2° parametro: função, no req pegamos as informações que o usuario está 
* enviando para nós, já no res nós respondemos ele.
*/

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params= Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (criação, delete)
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

// Permitindo acessar a aplicação pela porta 3333
app.listen(3333);
