/*
Etapa 2
En esta primera etapa, necesitamos requerir tu módulo autos y guardarlo en la variable
autosImportados que se encuentra en la misma carpeta del archivo donde estás trabajando.
Recordá que es el mismo archivo que creaste en la etapa anterior. 

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas
las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga
la lista de automóviles importada anteriormente.
*/

let autosImportados=require("./Etapa1");
let concesionaria={
    autos: autosImportados,
};
//console.log(autosImportados);