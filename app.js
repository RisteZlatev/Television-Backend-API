const express = require('express');
const database = require('./database/index')
const programiController = require('./controller/programiController')
const vraboteniController = require('./controller/vraboteniController')

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

database.connectToDataBase();

app.get('/vraboteni', vraboteniController.getAllVraboteni);
app.get('/vraboten/:id', vraboteniController.getVraboten);
app.post('/vraboten', vraboteniController.addVraboten);
app.patch('/vraboten/:id', vraboteniController.updateVraboten);
app.delete('/vraboten/:id', vraboteniController.deleteVraboten);


app.get('/programi', programiController.getAllProgrami);
app.get('/programa/:id', programiController.getPrograma);
app.post('/programa', programiController.addPrograma);
app.patch('/programa/:id', programiController.updatePrograma);
app.delete('/programa/:id', programiController.deletePrograma);

app.listen(process.env.PORT, (err)=> {
    if(err) return err.message;
    console.log("Succesfully connected to server");
});