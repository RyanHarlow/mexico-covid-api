const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;
const parseData = require('./utils/parseData');
const fs = require('fs')


parseData.parseData();
let spanishData = JSON.parse(fs.readFileSync("data.json", "utf8"));
let updatedAt = spanishData.pop().numCaso
updatedAt = updatedAt.substring(updatedAt.indexOf('Corte:') + 7, updatedAt.indexOf('Corte:') + 39);
let data = [];
for(var i = 0; i < spanishData.length; i++){
    data.push({
        numCase: spanishData[i].numCaso,
        sex: spanishData[i].sexo,
        age: spanishData[i].edad,
        dateOfInitialSymptoms: spanishData[i].fechaDeInicioDeSintomas,
        isConfirmed: spanishData[i].isConfirmado,
        origin: spanishData[i].procedencia,
        dateArrivedInMexico: spanishData[i].fechaDelLLegadaAMexico,
        state: spanishData[i].estado
    })
}




app.get('/', (req, res) => {
    res.redirect('http://github.com/ryanharlow')
})

app.get('/api/all', (req, res) => {
    res.json(data);
})



app.get('/api/total', (req, res) => {
    let returnObj = {states: {}};
    let totalCases = data.length;
    let totalF = 0;
    let totalM = 0;
    let ageCount = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i].sex == 'F'){
            totalF++;
        }if(data[i].sex == 'M'){
            totalM++;
        }
        ageCount += Number(data[i].age);
        if(returnObj.states[data[i].state]){
            returnObj.states[data[i].state]++;
        }else{
            returnObj.states = {...returnObj.states, [data[i].state]: 1};
        }
    }
    let averageAge = ageCount/totalCases;
    returnObj = {totalCases,totalM, totalF, averageAge, ...returnObj}
    res.json(returnObj)
})



app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})