import fs from "fs"

const datos = [2, 10, "a", 4, "b", 6, "d", true, "e", 9, 1, "z", 12, "r", "c", false]

function buscarCondicion (datos, condicion) {
    let nuevoArray = []
    
    for (let i = 0; i < datos.length; i++) {
        if (typeof datos[i] === condicion) {
            nuevoArray.push(datos[i])
        }
    }
    if (nuevoArray.length === 0) {
        return "La condición no es válida."
    }
    else {
        nuevoArray = [...new Set(nuevoArray)]
        nuevoArray.sort()
        fs.readFileSync("doc.txt", "utf-8")
        fs.writeFileSync("doc.txt", nuevoArray.join(", "))
        
    }
    return nuevoArray

}
console.log(buscarCondicion(datos, "number"))
console.log(buscarCondicion(datos, "string"))
console.log(buscarCondicion(datos, "boolean"))
console.log(buscarCondicion(datos, "sjfskldfj"))