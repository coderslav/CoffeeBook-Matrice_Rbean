const express = require('express');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const subscribeRouter = require('./routes/subscribe');

const app = express();

// Specifier le répertoire pour les fichiers static : .css, .js, .jpg, ...
app.use(express.static('public'));

// ajouter les middleware pour la lecture des cookies et du corps des requetes post
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser('secret'));

// use router files
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/subscribe', subscribeRouter);

// start the server
app.listen(process.env.PORT || 3000, () => {
    console.log(`CoffeeBook running on ${process.env.PORT || 3000}`);
});
