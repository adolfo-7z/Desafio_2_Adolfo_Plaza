var Insiete = document.getElementById("siete");
var Inocho = document.getElementById("ocho");
var Innueve = document.getElementById("nueve");
var division = document.getElementById("dividir");
var negativo = document.getElementById("negar");
var Incuatro = document.getElementById("cuatro");
var Incinco = document.getElementById("cinco");
var Inseis = document.getElementById("seis");
var multiplicacion = document.getElementById("multiplicar");
var borrar = document.getElementById("borrar");
var Inuno = document.getElementById("uno");
var Indos = document.getElementById("dos");
var Intres = document.getElementById("tres");
var resta = document.getElementById("restar");
var igual = document.getElementById("igual");
var limpiar = document.getElementById("limpiar");
var Incero = document.getElementById("cero");
var Inpunto = document.getElementById("punto");
var suma = document.getElementById("sumar");
var resultado;
var operador;

Insiete.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "7";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "7";
        resultado = document.getElementById("texto");
    }
});

Inocho.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "8";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "8";
        resultado = document.getElementById("texto");
    }
});

Innueve.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "9";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "9";
        resultado = document.getElementById("texto");
    }
});

Incuatro.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "4";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "4";
        resultado = document.getElementById("texto");
    }
});

Incinco.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "5";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "5";
        resultado = document.getElementById("texto");
    }
});

Inseis.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "6";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "6";
        resultado = document.getElementById("texto");
    }
});

Inuno.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "1";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "1";
        resultado = document.getElementById("texto");
    }
});

Indos.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "2";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "2";
        resultado = document.getElementById("texto");
    }
});

Intres.addEventListener("click", function(){
    if(resultado == "0"){
        document.getElementById("texto").value = "3";
        resultado = document.getElementById("texto").value;
    }else{
        document.getElementById("texto").value = resultado + "3";
        resultado = document.getElementById("texto");
    }
});

division.addEventListener("click", function(){
    if(resultado == "0"){

    } else{
        document.getElementById("texto").value = resultado + "/";
        resultado = document.getElementById("texto").value;
    }
});

negativo.addEventListener("click", function(){

});

multiplicacion.addEventListener("click", function(){
    if(resultado == "0"){

    }else{
        document.getElementById("texto").value = resultado + "*";
        resultado = document.getElementById("texto").value;
    }
});

borrar.addEventListener("click", function(){
    document.getElementById("texto").value = resultado.substr(0, resultado.length - 1);
    resultado = document.getElementById("texto");
});

resta.addEventListener("click", function(){
    if(resultado == "0"){

    }else{
        document.getElementById("texto").value = resultado + "-";
        resultado = document.getElementById("texto").value;
    }
});

igual.addEventListener("click", function(){
    if(resultado == ""){

    }else{
        document.getElementById("texto").value = eval(resultado);
        resultado = document.getElementById("texto").value;
    }
});

limpiar.addEventListener("click", function(){
    document.getElementById("texto").value = "";
    numberToCalc = document.getElementById("texto");
});

Incero.addEventListener("click", function(){
    if(resultado == "0"){

    } else{
        document.getElementById("texto").value = resultado + "0";
        resultado = document.getElementById("texto").value;
    }
});

Inpunto.addEventListener("click", function(){
    if (resultado.includes(".") == false) {
        document.getElementById("texto").value = resultado + ".";
        resultado = document.getElementById("texto").value;
    }
});

suma.addEventListener("click", function(){
    if (resultado == "0") {

    } else {
        document.getElementById("texto").value = resultado + " + ";
        resultado = document.getElementById("texto").value;
    }
});

setInterval(function(){
    resultado = document.getElementById("texto").value;
});
