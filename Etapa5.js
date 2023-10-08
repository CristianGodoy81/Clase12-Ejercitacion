/*
Etapa 5
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista
de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos
pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les
recuerda que no deberían de aparecer los autos que ya fueron vendidos.

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
Tené en cuenta que estamos optimizando nuestro código, por lo cual,
deberíamos utilizar el método filter.
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
}
//concesionaria.venderAuto("APL123");
//console.log(concesionaria.autosParaLaVenta());