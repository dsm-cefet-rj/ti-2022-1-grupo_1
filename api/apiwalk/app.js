const path = require('path');
const express = require('express');
const mongoose = require('mongoose')
const passport = require('passport');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

require("dotenv").config();


var app = express();
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var chatRouter = require('./routes/chat');
var dadosEntregaRouter = require('./routes/dadosEntrega');
var dadosPessoaisRouter = require('./routes/dadosPessoais');
var homeRouter = require('./routes/home');
var carrinhoRouter = require('./routes/carrinho');
var favoritosRouter = require('./routes/favoritos');
var infoProdutoRouter = require('./routes/infoProduto');
var userRouter = require('./routes/UserRoutes')
var authRouter = require('./routes/auth')

const url = "mongodb+srv://grupo1psw:a123456bc@cluster0.qtazj.mongodb.net/?retryWrites=true&w=majority"
const connect = mongoose.connect(url)

connect.then(db => console.log("Mongo conectado"))
    .catch(err => console.log(err))

app.use('/auth', passport.authenticate('jwt', { session: false }), authRouter)
app.use('/chat', chatRouter);
app.use('/postEntrega', dadosEntregaRouter);
app.use('/postPessoal', dadosPessoaisRouter);
app.use('/home', homeRouter);
app.use('/carrinho', carrinhoRouter);
app.use('/favoritos', passport.authenticate('jwt', { session: false }), favoritosRouter);
app.use('/infoProduto', infoProdutoRouter);
app.use('/api/users', userRouter);


module.exports = app;
