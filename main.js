let nombreIngres = prompt("Hola, ¿cómo te llamas?");
alert ("Hola " + nombreIngres);

let ingreso = confirm("¿Deseas ingresar al sitio?");
if (ingreso) { alert("Bienvenido al sitio"); 
  let total = 0;
  let bandera = true;

  const productos = ["1- Vela", "2 - Aceites", "3 - Difusores"];
  const precios = [50, 40, 13];

 function compra(precio) {
    total += precio;
 }

 function sumaProductos(numero) {
   
   if (numero > productos.length || numero <1 ) {
     alert("Selección inválida. Por favor, intente nuevamente.");
   }
   else {
     let indice = numero - 1;
     compra(precios[indice]);

     bandera= confirm("¿Quiere seguir comprando?");
    }
}

while(bandera){
    sumaProductos(parseInt(prompt(`Seleccione un número para comprar: \n${productos.join('\n')}`)));
}

alert(`El total de la compra es: ${total}€`); 


const IVA = 1.23;

let calcularIVA= confirm ("¿Desea calcular el IVA?");
if (calcularIVA) {
   let precioConIVA= total * IVA;
   alert(`El precio con IVA es: ${precioConIVA.toFixed(2)}€`);
} 
else{
    alert('No se ha aplicado el cálculo de I.V.A');


}}
 
else {
 alert("Gracias por visitarnos");
}
















   
   
   
   
 


 