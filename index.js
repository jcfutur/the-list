require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_DB, {useNewUrlParser: true, useUnifiedTopology: true}, (error) => {
    console.log(error);
});

mongoose. connection.on("open", () => {
    console.log("succesfully connected");
});

mongoose.connection.on("error", () => {
    console.log("there was an error");
});

const Cat = require('./models/cat');
//const Cat = mongoose.model('Cat', { name: String });

app.use(express.static(path.join(__dirname, 'frontend/build')));


app.delete('/api/deleteCat/:id', (req, res) => {
    Cat.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true}), console.log(item.name + " a été supprimé")))
        .catch(err => res.status(404).json({success: false}));

});

app.post('/api/putCat', (req, res) => {
    const objetFront = req.body.lajout;
    const objetToSave = new Cat({
        name : objetFront.name
    });
    objetToSave.save().then(() => console.log(`${objetFront.name} a ete ajouté`));
});

app.get('/api/getCat', (req, res) => {
    Cat.find().then(cat => res.status(200).json(cat))
});

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend/build/index.html'));
});

app.listen(process.env.port || 8080, () => {
    console.log('express app is runnig on port 8080')
});

//const User = require('./models/user');