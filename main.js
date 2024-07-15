let nombre;

nombre= "Mar"


console.log(nombre)


solicitarNombre = prompt ( "Hola ¿como te llamas?")
function solicitarNombre(){
    let nombreIngresado = prompt("Ingresar nombre")
    alert ("El nombre ingresado es" + nombreIngresado)
}
edad = prompt ( "Hola  " + solicitarNombre +  "  ¿Cuantos años tenés?")
if(edad > 18){

   let ingreso = confirm("¿Deseas ingresar al sitio? ")


//let catalogo  = prompt ("¿Que te interesa ver de nuestro catálogo?") 
alert ("Bienvendio al sitio")

while (ingreso){ ingreso=confirm ("¿Desea salir del sitio?")}

let catalogo = (1, 2, 3)
const insumos = [ catalogo];
console.log (insumos)



const IVA=1.23;
let imp= prompt ("Ingresa el valor total de tu compra para calcular el IVA")
let precioConIVA= (imp * IVA) ;
console.log( precioConIVA)
alert ( precioConIVA)


}

else if (edad <18){
    alert("Volvé cuando seas mayor")
edad = parseInt(edad)

let= edadDentroDe10años = edad + 10
alert("Por ejemplo dentro de 10 años tendrías:"+ edadDentroDe10años)}







   
   
   
   
 


    
//for(let i=0; i<10;i++){ console.log("itercion N°" + i); }