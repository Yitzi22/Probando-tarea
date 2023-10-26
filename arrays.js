
const personas = [
    {
        nombre: "Yitzi",
        edad: 29,
        sexo: "F",
    },

    {
        nombre: "Ivan",
        edad: 29,
        sexo: "M",
    },

    {
        nombre: "Victor",
        edad: 28,
        sexo: "M",
    },

]

 personas.push({
        nombre: "Yurbis",
        edad: 32,
        sexo: "F",        
})

personas.unshift({
    nombre: "Waldo",
    edad: 63,
    sexo: "M",
})

const personasMasculinas = personas.filter((persona) => {
    return persona.sexo === "M";
})

const mayoresDeTreinta = personas.filter((persona) => {
    return persona.edad >= 30;
})

const sacarPersona = personas.filter((persona) => {
     return persona.nombre !== "Victor";
})

const peoples = personas.map((persona) => {
    if (persona.nombre === "Waldo") 
      return persona.edad = 62; 
})

personas.forEach((persona) => {
    if (persona.nombre === "Yurbis")
     persona.oficio = "Lider Infantil";
        
    
});

console.log(personas);
