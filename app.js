const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3000;
const parseData = require('./utils/parseData');
const fs = require('fs')
const stateMap = require('./utils/stateMapping');




parseData.parseData();
let spanishData = JSON.parse(fs.readFileSync("data.json", "utf8"));
let updated = spanishData.pop()['N° Caso'];
let data = [];
for(var i = 0; i < spanishData.length; i++){
    data.push({
        numCase: spanishData[i]['N° Caso'],
        sex: spanishData[i]['Sexo'],
        age: spanishData[i]['Edad'],
        dateOfInitialSymptoms: spanishData[i]['Fecha de Inicio de síntomas'],
        isConfirmed: spanishData[i]['Identificación de COVID-19 por RT-PCR en tiempo real'],
        origin: spanishData[i]['Procedencia'],
        dateArrivedInMexico: spanishData[i]['Fecha del llegada a México'],
        state: spanishData[i]['Estado']
    })
}

let stateTotal = {};

for(var i = 0; i < data.length; i++){
    if(stateTotal[data[i].state]){
        stateTotal[data[i].state]++;
    }else{
        stateTotal[data[i].state] = 1;
    }
}


let geojson = JSON.parse(fs.readFileSync("geo.json", "utf8"));
for(var i = 0; i < geojson.features.length; i++){
    let name = geojson.features[i].properties.name.toUpperCase();
     geojson.features[i].properties.totalCases = stateTotal[name];
}


app.get('/', (req, res) => {
    res.redirect('https://github.com/RyanHarlow/mexico-covid-api')
})

app.get('/api', (req, res) => {
    res.redirect('https://github.com/RyanHarlow/mexico-covid-api')
})

app.get('/api/all', (req, res) => {
    res.json({updated,cases:[...data]});
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
            returnObj.states[data[i].state].totalCases++;
        }else{
            returnObj.states = {...returnObj.states, [data[i].state]: {code: stateMap[data[i].state], totalCases: 1}};
        }
    }
    let averageAge = ageCount/totalCases;
    returnObj = {totalCases,totalM, totalF, averageAge, ...returnObj}
    res.json({updated, ...returnObj})
})

app.get('/api/state/:state', (req, res) => {
    let stateCode = req.params.state.toUpperCase();
    let stateName = Object.keys(stateMap).find(key => stateMap[key] === stateCode);
    let total = {totalCases: 0, totalM: 0, totalF: 0};
    let cases= [];
    let ageCount = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i].state == stateName){
            ageCount += Number(data[i].age);
            cases.push(data[i]);
            total.totalCases++;
            if(data[i].sex == 'M'){
                total.totalM++;
            }else if(data[i].sex == 'F'){
                total.totalF++;
            }
        }
    }
    let averageAge = ageCount/cases.length;
    total.averageAge = averageAge;
    res.json({
        updated,
        stateName,
        stateCode,
        total,
        cases
    });
})

app.get('/api/geojson', (req, res) => {
   res.json(geojson)
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})