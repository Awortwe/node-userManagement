const express = require('express');
const path = require('path');

const userRoutes = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(userRoutes);

app.listen(3000);
