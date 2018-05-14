/*
 *  IN THIS: 
 *              - Intento convertir el OBJETO a un JSON para poder IMPRIMIRLO completo en HTML.
 *                (sino me aparece [Object]=[object])
 *              - FUNCIONA OK
 * 
 * /

/* Express
-----------------------------------------*/
var express = require('express');
const app = express();





/* API ip2location
*******************************************************/
// Llamo al modulo ip2location (instalado con 'npm install ip2location-nodejs').
var ip2loc = require("ip2location-nodejs");

//Indico la RUTA de la BASE de DATOS utilizada: 
ip2loc.IP2Location_init("base/IPV6-COUNTRY-REGION-CITY.SAMPLE.BIN");





/* FUNCION: RECIBE UNA IP Y DEVUELVE EL PAIS ASOCIADO.
******************************************************/
function devolverIP( IPrecibida ) {
  console.log('FUNCION devolverIP ======================');

  //creo una var en la que se guarda el OBJETO entero asociado al IP que le paso.
  var pais = ip2loc.IP2Location_get_all( IPrecibida );

  //Devuelvo la PROPIEDAD 'country_long' del OBJETO pais.
  return pais;
  
}





/* FORMULARIO para INGRESO de IP
*********************************/
// Esto require(); sirve para incluir archivos HTML indicandole la ruta (path)
const path = require('path');

app.get('/form', function (req, res) {
  res.sendFile(path.join(__dirname, 'form-ip.html'));
});




/* RENDERIZO EL RESULTADO
*********************************/
// Obtiene una variable enviada por GET desde el sitio '/form'
// Ej de ruta: /form?miIP=8.8.8.8
app.get('/tu-ip', function (req, res) {
    // Crea una var y se le asigna lo que devuelve la funcion 'devolverIP'.
    // *query es un PRORIEDAD del OBJETO REQUEST, que nos permite acceder al valor de cada variable enviada por GET.
    // '/tu-ip?miIP=valorEnviado'
    var tuPais = devolverIP( req.query.miIP );

    //Convierto el OBJETO a JSON para poder imprimirlo en el HTML.
    var tuPaisEnJSON = JSON.stringify(tuPais);
    console.log(tuPaisEnJSON); 
    res.send(tuPaisEnJSON);

    //res.send(`Tu IP es de: ${tuPais.country_short} <br/> Tu IP es de: ${tuPais.country_long} `);
});



app.listen(3000);
