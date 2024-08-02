Swal.fire({
  title: 'LUMUSMAXIMA DICE',
  text: 'Bienvenido!',
  icon: 'success',
  confirmButtonText: 'Cool'
})

const velas = [
  {
      nombre: 'Lavanda',
      color: 'Violeta',
      precio: 100
  },
  {
      nombre: 'Vainilla',
      color: 'Blanco',
      precio: 50
  },
  {
      nombre: 'Azhar',
      color: 'Blanco',
      precio: 300
  }
]

function createTable(data) {

  const tableBody = document.getElementById('tablita');
    
  for (let i = 0; i < data.length; i++) {
      let tr = document.createElement('tr');
      tr.append("<td>" + data[i].nombre + "</td>");
      tr.append("<td>" + data[i].color + "</td>");
      tr.append("<td>" + data[i].precio + "</td>");
      tableBody.append(tr)
  }
}

createTable(velas)

/*
let nombreIngres = prompt("Hola, ¿cómo te llamas?");
alert("Hola " + nombreIngres);

const productos = ["1- Vela", "2 - Aceites", "3 - Difusores"];
const precios = [50, 40, 13];
const perros = [
  {
    nombre: 'vela de lavanda',
    color: 'violeta',
    precio: 100
  },
  {
    nombre: 'vela de vainilla',
    color: 'blanco',
    precio: 50
  },
  {
    nombre: 'vela de azhar',
    color: 'blanco',
    precio: 300
  }

];

function buscarVelas(color) {
  return perros.filter(perro => perro.color == color)
}

let color = 'blanco'
let velas_filtradas = buscarVelas(color)


let ingreso = confirm("¿Deseas ingresar al sitio?");

// const ya_entro = localStorage.getItem('ya_entro')
// if (!ya_entro) {
//   let confimo = confirm("queres comprar?")
//   if (confimo) {
//     localStorage.setItem('ya_entro', true)
//     // redirigir a compras de velas
//   } else {
//     localStorage.setItem('ya_entro', false)
//   }
// }

if (ingreso) {
  alert("Bienvenido al sitio");

  let total = 0;
  let bandera = true;


  function compra(precio) {
    total += precio;
  }

  function sumaProductos(numero) {

    if (numero > productos.length || numero < 1) {
      alert("Selección inválida. Por favor, intente nuevamente.");
    }
    else {
      let indice = numero - 1;
      compra(precios[indice]);

      bandera = confirm("¿Quiere seguir comprando?");
    }
  }

  while (bandera) {
    sumaProductos(parseInt(prompt(`Seleccione un número para comprar: \n${productos.join('\n')}`)));
  }

  alert(`El total de la compra es: ${total}€`);


  const IVA = 1.23;

  let calcularIVA = confirm("¿Desea calcular el IVA?");
  if (calcularIVA) {
    let precioConIVA = total * IVA;
    alert(`El precio con IVA es: ${precioConIVA.toFixed(2)}€`);
  }
  else {
    alert('No se ha aplicado el cálculo de I.V.A');


  }
}

else {
  alert("Gracias por visitarnos");
}
*/