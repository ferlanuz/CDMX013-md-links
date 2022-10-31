#!/usr/bin/env node

const api = require('./src/api.js');
const [,, route] = process.argv;
const optValidate = process.argv.includes('--validate');
const optStats = process.argv.includes('--stats');

api.mdLinks(route, 
    {
    validate: optValidate, 
    stats: optStats
 })
    .then((result, optValidate, optStats) => {
        //
        if (optValidate && optStats) {
            console.log(result)
        }
            if(optStats){
           
            }
            if(optValidate){
                console.log(result)
            }else{
                console.log(result)
            }
    });
/*    */
