# NODE - API de ip2location

## INDICE
#### index.js
  - Es el ultimo archivo que estoy laburando.

#### index1.js
  - Es el primero que hice.

#### index2.js
  - IMPRIMO en HTML una VAR cuyo valor es un RETURN de una FUNCION que se encarga de DEVOLVER el PAIS, recibiendo como parametro, una IP.

#### index3.js
  - Recibo el OBJETO 'PAIS', y el req.send() le indico que PROPIEDAD quiero ver. 
  - A diferencia de 'index2.js', aquí la funcion devuelve el OBJETO completo.

#### index4.js
  - Convierto el OBJETO 'pais' a un JSON para poder IMPRIMIRLO completo en HTML.
  - De no hacerlo, al imprimir en el HTML sale '[Object]=[object]'.

#### index5.js
  - Encapsulo la funcion ip2location en un MODULO.

#### index6.js
  - Utilizo MODULO.
  - Obtengo JSON. (simil index4.js)



------------------------------------------------------------------------------------------------------------------

## HEROKU

- Para que el proyecto funcione en HEROKU, es necesario que existan los archivos 'Procfile' y '.env'.
    - El archivo 'Procfile' indica el archivo que se ejecuta al inicio en HEROKU.
    ----> Mas info: https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
    - En el archivo '.env' se declaran las VARIABLES DEL ENTORNO (se pueden configurar algunas cosas de HEROKU desde ahi).
    ----> Mas info: https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-config-vars

### Info util
- Para loggearse
> heroku login

- Para subir a HEROKU:
> git push heroku master

- Para ver de manera local
> heroku local web

- Para ver en el navegaro (online)
> heroku open


