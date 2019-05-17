## Solucionar Problemas con CORS


Añadir en el .htaccess del servidor que sirve la api restful

    Header add Access-Control-Allow-Origin "*"
    Header add Access-Control-Allow-Headers "origin, x-requested-with, content-type"
    Header add Access-Control-Allow-Methods "PUT, GET, POST, DELETE, OPTIONS"

