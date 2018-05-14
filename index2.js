/*
 *  IN THIS:
 *               - IMPRIMO en HTML una VAR cuyo valor es un RETURN de una FUNCION que se encarga de DEVOLVER el PAIS, recibiendo como parametro, una IP.
 *
 * /

/* Express
-----------------------------------------*/
var express = require('express');
const app = express()




/* API ip2location
----------------------------------------*/
// Llamo al modulo ip2location (instalado con npm install ip2location). 
var ip2loc = require("ip2location-nodejs");

//Ruta de la base de datos utilizada: 
ip2loc.IP2Location_init("base/IPV6-COUNTRY-REGION-CITY.SAMPLE.BIN");



// FUNCION: RECIBE UNA IP Y DEVUELVE EL PAIS ASOCIADO.
function devolverIP( IPrecibida ) {
  console.log('FUNCION devolverIP ======================');

  //creo una var en la que se guarda el OBJETO entero asociado al IP que le paso.
  var pais = ip2loc.IP2Location_get_all( IPrecibida );
  
  // Accedo a la PROPIEDAD 'country_long' del OBJETO = pais.
  //console.log(pais.country_long);

  //Devuelvo la PROPIEDAD 'country_long' del OBJETO pais.
  return pais.country_long;
  
}







/* FORMULARIO
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
  var tuPais = devolverIP( req.query.miIP );
  res.send(`Tu IP es de: ${tuPais}`);
});



app.listen(3000);
