# Documentation

## Base URL
    https://covmx.xyz

## Endpoints

* /api
    goes to github repo
* /api/all
    returns a json array of cases in mexico
* /api/total
    returns total cases in mexico and a list of total cases in states
* /api/state/:statecode
    return cases and total for a particular state. state code is a two letter code defined in ./utils/stateMapping


data is ususally updated at 8pm CST

Virus data obtained from 
https://serendipia.digital/2020/03/datos-abiertos-sobre-casos-de-coronavirus-covid-19-en-mexico/
gob.mx/salud

geojson data from 
https://gist.githubusercontent.com/ponentesincausa/46d1d9a94ca04a56f93d/raw/a05f4e2b42cf981e31ef9f6f9ee151a060a38c25/mexico.json