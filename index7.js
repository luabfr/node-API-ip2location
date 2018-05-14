/*
 *  IN THIS: 
 *          - La FUNCION para CONVERTIR IP en PAIS ahora está en MODULO.*
 *          - Devuelvo el objeto en formato JSON completo.*
 *          - Cambio la BASE de DATOS por la IPv4 (antes usaba la IPv6)
 *          - Adaptado para HEROKU
 * /

/* Express
-----------------------------------------*/
var express = require('express');
const app = express();
const puerto = process.env.PORT || 5000 ;



/* FORMULARIO para INGRESO de IP
*********************************/
// Esto require(); sirve para incluir archivos HTML indicandole la ruta (path)
const path = require('path');

app.get('/form', function (req, res) {
  res.sendFile(path.join(__dirname, 'form-ip.html'));
});




/* MODULO IP
*******************************************/
var miModuloIP = require('./mi-modulo-IP');



/* RENDERIZO EL RESULTADO
*********************************/
// Obtiene una variable enviada por GET desde el sitio '/form' .    Ej de ruta: /form?miIP=8.8.8.8
app.get('/tu-ip', function (req, res) {
    
  /* Crea una var y se le asigna lo que devuelve la FUNCION 'devolverIP' del MODULO 'miModuloIP'(ip2location).
   ***query es un PRORIEDAD del OBJETO REQUEST, que nos permite acceder al valor de cada variable enviada por GET.
   '/tu-ip?miIP=valorEnviado' : 'miIP' es el nombre del CAMPO que se envia desde FORMULARIO HTML.
  */
   var IPrecibida = miModuloIP(req.query.miIP);
    

  var tuPais = IPrecibida;

  //Convierto el OBJETO a JSON para poder imprimirlo en el HTML.
  var tuPaisEnJSON = JSON.stringify(tuPais);
  console.log(tuPaisEnJSON); 

  res.send(`JSON: <br> ${tuPaisEnJSON}`);
  //res.send(`Tu IP es de: ${tuPais.country_short} <br/> Tu IP es de: ${tuPais.country_long} `);

});



app.listen(puerto);
