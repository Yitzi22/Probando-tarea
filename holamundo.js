//Importar la funcion input
const input = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

input.question("Introduce el primer número: ", (num1) => {
    input.question("Ingresa el segundo número: ", (num2) => {
        if (num1 > num2) {
            console.log("El número mayor es: " + num1 + "  Y el número menor es: " + num2);
        } else if (num1 < num2) {
            console.log("El número mayor es: " + num2 + "  Y el número menor es: " + num1);
        } else {
            console.log("Los número son iguales");
        }

        input.close();
    });
});




