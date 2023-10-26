/*Arma un algoritmo que reciba un numero y devuelva la lista de sus divisores*/

const listaDivisores = (numero) => {
    const divisores = [];
    for (let i = 1; i <= numero; i++){
        if(numero % i === 0)
        divisores.push(i);
    }

    return divisores;
}



console.log(listaDivisores(33));