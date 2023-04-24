//Crea un archivo JS que contenga las siguientes líneas

//- Una función sin parámetros que devuelva siempre "true"

function parametros() {
    console.log(true)
}

parametros()







//- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

setTimeout(function() {
    console.log("Hola soy una promesa 5 segundos después de haberse ejecutado")
    
},2000)
    
    

//- Una función generadora de índices pares automáticos


pares()
function pares(params) {
    for (let i = 0; i < 10; i+=2) {
       
        console.log(i)
    }
}

