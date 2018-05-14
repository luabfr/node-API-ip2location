/* API ip2location
*******************************************************/
// Llamo al modulo ip2location (instalado con 'npm install ip2location-nodejs').
var ip2loc = require("ip2location-nodejs");

//Indico la RUTA de la BASE de DATOS utilizada: 
//ip2loc.IP2Location_init("base/IPV6-COUNTRY-REGION-CITY.SAMPLE.BIN");
ip2loc.IP2Location_init("base/IP-COUNTRY-REGION-CITY-SAMPLE.BIN");




/* FUNCION: RECIBE UNA IP Y DEVUELVE EL PAIS ASOCIADO.
******************************************************/
/*function devolverIP( IPrecibida ) {
    console.log('FUNCION devolverIP ======================');

    //creo una var en la que se guarda el OBJETO entero asociado al IP que le paso.
    var pais = ip2loc.IP2Location_get_all(IPrecibida);

    //Devuelvo la PROPIEDAD 'country_long' del OBJETO pais.
    return pais;

    
}*/
const devolverIP = function (IPrecibida) {
    console.log('FUNCION devolverIP ======================');

    //creo una var en la que se guarda el OBJETO entero asociado al IP que le paso.
    var pais = ip2loc.IP2Location_get_all(IPrecibida);

    //Devuelvo la PROPIEDAD 'country_long' del OBJETO pais.
    return pais;

};
module.exports = devolverIP;

