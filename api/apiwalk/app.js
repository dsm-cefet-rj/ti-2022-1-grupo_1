var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose')


var chatRouter = require('./routes/chat');
var dadosEntregaRouter = require('./routes/dadosEntrega');
var dadosPessoaisRouter = require('./routes/dadosPessoais');
var homeRouter = require('./routes/home');
var carrinhoRouter = require('./routes/carrinho');
var favoritosRouter = require('./routes/carrinho');

const url = "mongodb+srv://lucasgjorge:abc123456lucasRodrigo@cluster0.lnkn79s.mongodb.net/?retryWrites=true&w=majority"
const connect = mongoose.connect(url) 

connect.then( db => console.log("Mongo conectado"))
.catch( err => console.log(err))


var app = express();
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/chat', chatRouter);
app.use('/dadosEntrega',dadosEntregaRouter);
app.use('/dadosPessoais',dadosPessoaisRouter);
app.use('/home', homeRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/favoritos', favoritosRouter);

module.exports = app;
