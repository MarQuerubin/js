let nombreIngres = prompt("Hola, ¿cómo te llamas?");

alert ("Hola " + nombreIngres);

let ingreso = confirm("¿Deseas ingresar al sitio?");
if (ingreso) {
  alert("Bienvenido al sitio");
} else {
  alert("Gracias por visitarnos");
}

let categorias = ["Fragancias", "Insumos", "Aromaterapia"];
const articulos = ["Aceites", "Velas", "Difusores"];

let preciosArticulos = [40, 50, 70];

for (let i = 0; i < articulos.length; i++) {
 console.log("Artículo: " + articulos[i]);
 let categoria;
 do {
   categoria = prompt("Por favor ingrese la categoría del artículo '" + articulos[i]);
   if (!categorias) {
     alert("La categoría ingresada no es válida. Por favor ingrese una categoría válida.");
   }
 } while (!categorias.includes(categoria));

 let precio;
 do {
   precio = parseFloat(prompt(`Por favor ingrese el precio del artículo ${articulos[i]}`));
   if (isNaN(precio) || precio <= 0) {
     alert("El precio ingresado no es válido. Por favor ingrese un número positivo como precio.");
   }
 } while (isNaN(precio) || precio <= 0);

 preciosArticulos.push(precio);
 alert(`${articulos[i]} fue comprado en la categoría ${categoria}`);
}


let totalCompraSinIVA= preciosArticulos.reduce((a, b) => a + b, 0);
alert(`El total de la compra sin IVA es: ${totalCompraSinIVA.toFixed(2)}€`);

const IVA = 1.23;
let impuestoIVA= totalCompraSinIVA * IVA;
alert(`El total de la compra con IVA incluido es: ${impuestoIVA.toFixed(2)}€`);










   
   
   
   
 


 