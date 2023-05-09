const express = require('express');

const path = require('path'); 

const app = express();

const PORT = process.env.PORT || 3010;

app.use(express.static('public'))

app.listen(3010, () => {
    console.log('Servidor corriendo en el puerto 3010')
});

app.listen(PORT,()=>console.log('servidor corriendo en el puerto'+PORT));

app.get('/home', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

app.get('/register', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'));
});

app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'));
});
