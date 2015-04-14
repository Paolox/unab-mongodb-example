# unab-mongodb-example

UNAB Ejemplo para uso de MongoDB

Este proyecto utiliza la base de datos MongoDB por medio del proyecto Mongoose el cual es un Modelador de Objetos para NodeJS.
Para Windows, dado que para instalar Mongoose en Windows se usa el proyecto node-gyp para compilar algunos fuentes, es necesario seguir las indicaciones previas en:

[Node-gyp Instrucciones para Windows](https://github.com/TooTallNate/node-gyp/wiki/Visual-Studio-2010-Setup)

Una vez lo anterior, es necesario hacer lo siguiente:

**IMPORTANTE**: Es posible que alguno de los pasos solicite instalar Python. Si se solicita, usar la version 2.7.9 o alguna inferior a las 3.0

- $ npm config set msvs_version 2012 --global
- $ npm install -g node-gyp
- $ npm install mongoose --mongodb:native --save
