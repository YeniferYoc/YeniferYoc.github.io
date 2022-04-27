function form_mio(valor) {
    /*
        document: hace referencia a la pagina web cargada en el navegador
        getElementById(): obtiene el elemento html asociado al id que le pasemos por parametro
        style: accede a la propiedad style de la etiqueta html obtenida y modifica cualquier propiedad 
        perteneciente a este atributo, style es refernte al css de esa etiqueta
    */
    if (valor == 1) { document.getElementById("formulario").style.display = ""; }
    else { document.getElementById("formulario").style.display = "none"; }
}

// async: funcion que puede contener await adentro de ella
async function calculadora(){
    // value: Retorna el valor asociado a la etiqueta
    let num1 = document.getElementById("numero1").value
    let num2 = document.getElementById("numero2").value
    let operr = document.getElementById("operador").value

    let peticion = await fetch("http://localhost:4000/operacion", {
       

        method: "PUT",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            numero1: num1,
            numero2: num2,
            operador: operr
        })
    })
    let respuesta = await peticion.json()
    document.getElementById("Resul").value = respuesta.resultado
    alert("hola");

    document.getElementById("numero1").value = ""
    document.getElementById("numero2").value = ""
    document.getElementById("operador").value = ""

}



async function frase() {
    let frase_n = document.getElementById("frase").value

    let peticion = await fetch("http://localhost:4000/frase_", {
        method: "PUT",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            frase: frase_n
        })
    })
    let respuesta = await peticion.json()
    document.getElementById("Palabras").value = respuesta.palabras
    document.getElementById("Vocales").value = respuesta.vocales
    document.getElementById("Consonantes").value = respuesta.consonantes
    alert(respuesta.palabras)
    document.getElementById("frase").value = ""
}

async function primos(){
    // value: Retorna el valor asociado a la etiqueta
    let num1 = document.getElementById("inferior").value
    let num2 = document.getElementById("superior").value

    let peticion = await fetch("http://localhost:4000/primos", {
        method: "POST",
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            inferior: num1,
            superior: num2
        })
    })
    let respuesta = await peticion.json()
    document.getElementById("Resultado_p").value = respuesta.primos
    alert(respuesta.primos)

    document.getElementById("inferior").value = ""
    document.getElementById("superior").value = ""
    document.getElementById("Resultado_p").value = ""

}



