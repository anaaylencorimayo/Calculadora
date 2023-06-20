function borrartodo(){
    location.reload();  /*con esto, se recarga la pagina*/
}
//en este caso Reset no funciono, porque es exclusivo para los formularios.

function sumar(){
    let valor1=parseInt(document.getElementById("valor1").value);
    //parseInt convierte el texto en numero
    let valor2=parseInt(document.getElementById("valor2").value);
    /*con value CREO que tomamos el valor de la variable*/

    document.getElementById("resultado").innerHTML= valor1+valor2;
    document.getElementById("eleccion").innerHTML= "Suma"
}

function restar(){
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);

    document.getElementById("resultado").innerHTML= valor1-valor2;
    document.getElementById("eleccion").innerHTML= "Resta"
}

function multiplicar(){
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);

    document.getElementById("resultado").innerHTML= valor1*valor2;
    document.getElementById("eleccion").innerHTML= "Multiplicación"
}

function dividir(){
    let valor1=parseInt(document.getElementById("valor1").value);
    let valor2=parseInt(document.getElementById("valor2").value);

    document.getElementById("resultado").innerHTML= valor1/valor2;
    document.getElementById("eleccion").innerHTML= "Division"
}