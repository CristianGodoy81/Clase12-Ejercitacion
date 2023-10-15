/*
Etapa 6
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra.
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos
para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel
que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
*/

let autosImportados=require("./Etapa1");
let concesionaria={
    autos: autosImportados,
    buscarAuto: function(patente){
        for (let i=0;i<this.autos.length;i++){
            if (this.autos[i].patente===patente){
                return this.autos[i];
            }
        }
        return null;
    },
    venderAuto: function(patente){
        if (this.buscarAuto(patente)){
            this.buscarAuto(patente).vendido=true;
        }
        else {
            return console.log("Patente no encontrada");
        }
    },
    autosParaLaVenta: function(){
        return this.autos.filter(function(elemento){
            return elemento.vendido===false;
        })
    },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter(function(elemento){
            return elemento.km<100;
        })
    },
}
//console.log(concesionaria.autosNuevos());
//console.log(concesionaria.autos);