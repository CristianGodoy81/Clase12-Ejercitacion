/*
Etapa 7
El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.

¿Te acuerdas cuál es el método de Array con el que puedes generar un nuevo Array?
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
    listaDeVentas: function(){
        let vendidos = this.autos.filter(function(objeto){
            return objeto.vendido===true;
        });
        let ventas = vendidos.map(function(objeto){
            return objeto.precio;
        })
        return ventas;
    },
}
//concesionaria.venderAuto("APL123");
//concesionaria.venderAuto("JJK116");
//console.log(concesionaria.listaDeVentas());