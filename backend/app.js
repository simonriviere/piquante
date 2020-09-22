const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://simon:sisi1992@cluster0.76ulj.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie !'))
.catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// gérer les erreurs CROS, ajout de middleware qui s'appliquera à toute les routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //accéder à notre api depuis n'importe quelle origine '*'
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); // ajout des headers mentionnés aux requetes envoyées vers notre api'
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // envoyer les requêtes avec les méthodes get post ...
    next();
});
app.use(bodyParser.json());

module.exports = app;