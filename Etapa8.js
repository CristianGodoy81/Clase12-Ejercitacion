/*
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!
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
    totalDeVentas: function(){
        let lista = this.listaDeVentas();
        if (lista.length!=0){
            return lista.reduce(function(total,ventas){
                return total + ventas;
            });
        }
        else {
            return 0;
        }
    },
};
//concesionaria.venderAuto("APL123");
//concesionaria.venderAuto("JJK116");
//console.log(concesionaria.listaDeVentas());
//console.log(concesionaria.totalDeVentas());