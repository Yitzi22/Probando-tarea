
function operar(operacion, a, b){
    if (operacion.toLowerCase() == "sumar") {
        return (a + b); 
    } 
      
    if (operacion.toLowerCase() == "restar") {
        return a - b;
    }  
     
    if (operacion.toLowerCase() == "multiplicar") {
        return a * b;
    } 
      
    if (operacion.toLowerCase() == "dividir") {
        return a / b;
    }  
     
    return `"${operacion}" no es operación válida`;

}

console.log("Suma:", operar("sumar", 5, 4));
console.log("Resta:", operar("restar", 5, 4));
console.log("Multiplicación:", operar("multiplicar", 5, 4));
console.log("División:", operar("dividir", 5, 4));
console.log("Suma:", operar("SumaR", 5, 4));
console.log("Error:", operar("zumar",5, 4));
