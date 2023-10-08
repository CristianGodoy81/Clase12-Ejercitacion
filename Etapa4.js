/*
Etapa 4
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y,
en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto,
la cual ya nos devuelve el objeto literal a modificar.
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
}
//concesionaria.venderAuto("JJK116");
//console.log(concesionaria.buscarAuto("JJK116"));