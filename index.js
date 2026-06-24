const express = require('express');
const controller = require('./controllers/controller');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');

// Paths


app.get('/saludar', controller.saludar);


// Paths

app.listen(process.env.PORT || 7777, ()=> {
    console.log("Aplicación en línea, ingresa a 7777");
});