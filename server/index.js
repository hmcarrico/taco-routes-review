const express = require('express');
const bodyParser = require('body-parser');
const tacoContorller = require('./controllers/tacoController');

const app = express();
app.use(bodyParser.json());

app.get('/api/browse', tacoContorller.tacoBrowse);
app.get('/api/specials', tacoContorller.tacoEspeciales);
app.get('/api/memes', tacoContorller.tacoMemes);

const PORT = 4000;
app.listen(PORT, () => console.log(`Listing on port ${PORT}`));