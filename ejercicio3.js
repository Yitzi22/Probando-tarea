/*Arma un algoritmo que reciba un numero y devuelva la lista de sus divisores*/

const obtenerDivisores = (numero) => { // crear una funcion que obtenga un numero
    const divisores = [];  // crear un arreglo que funcione como lista
    for (let i = 1; i <= numero; i++){ //crear un ciclo for para armar la lista, es decir llenar el arreglo
        if (numero % i === 0) { // si el resto de la division del "numero" es cero entonces
            divisores.push(i); //el metodo push agrega el numero a la lista
        }
     } 

     return divisores;
           
   
}

console.log(obtenerDivisores(10));