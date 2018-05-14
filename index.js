/* Express
-----------------------------------------*/
var express = require('express');
const app = express()




/* API ip2location
----------------------------------------*/
var ip2loc = require("ip2location-nodejs");

ip2loc.IP2Location_init("base/IPV6-COUNTRY-REGION-CITY.SAMPLE.BIN");

testip = ['8.8.8.8'/*, '2404:6800:4001:c01::67', '2001:0200:0102:0000:0000:0000:0000:0000', '2001:0200:0135:0000:0000:0000:0000:0000', '2001:0200:017A:0000:0000:0000:0000:0000'*/];
for (var x = 0; x < testip.length; x++) {
  result = ip2loc.IP2Location_get_all(testip[x]);
  for (var key in result) {
    //console.log(key + ": " + result[key]);

   // if(key == "country_long"){
      console.log("----------------------- ESTE ES EL PAIS -------------------------------");
      console.log(key + ": " + result[key]);
    //}
  }
}


function devolverIP( IPrecibida ) {
  console.log('FUNCION devolverIP ======================');

  //creo una var en la que se guarda el OBJETO entero asociado al IP que le paso.
  var pais = ip2loc.IP2Location_get_all( IPrecibida );
  // Acceso la PROPIEDAD 'country_long' del OBJETO = pais.
  console.log(pais.country_long);

  return pais.country_long;
  
}

function f_pedido(){
  var devolver = "te estoy devolviendo desde una function";
  return devolver;
};



app.get('/home', function (req, res) {
  res.send("<p>hola</p>");
});
app.get('/pedido', function (req, res) {
  res.send( f_pedido() );
}); 



/* FORMULARIO
---------------------------*/
// Esto require(); sirve para incluir archivos HTML indicandole la ruta (path)
const path = require('path');

app.get('/form', function (req, res) {
  res.sendFile(path.join(__dirname, 'form-ip.html'));
});



// FUNCA OK
// Obtiene una variable enviada por GET
// Ej de ruta: /form?nombre=miIP
app.get('/tu-ip', function (req, res) {
  //Crea una var cuyo valor
  var tuPais = devolverIP( req.query.miIP );
  res.send(`Tu IP es de: ${tuPais}`);
});




app.listen(3000);
