/**
 * Con este codigo obtengo el valor de cualquier boton
 */
let $botonNumero = document.getElementById("boton");

$botonNumero.addEventListener("click", (event) => {
  let element = event.target.textContent;
  console.log(element);
  insertarEnPantalla(element);

  return element;
});

/**
 * Modifica los valores de la pantalla
 */

let $inputPantalla = document.getElementById("inputPantalla");

function insertarEnPantalla(valor) {
  if (limiteCaracteresPantalla()) {
    $inputPantalla.textContent += valor;
  }
  console.log($inputPantalla.textContent.length);
}
function limiteCaracteresPantalla() {
  return $inputPantalla.textContent.length < 15;
}

var primes = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

function buscar(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
  var guess;

  while (array[guess] !== targetValue) {
    guess = Math.floor((max + min) / 2);
    if (max < min) {
      return -1;
    } else if (array[guess] > targetValue) {
      max = guess - 1;
    } else {
      min = guess + 1;
    }
  }

  return guess;
}
const pass = "8c23e8c59";
const email = "vdfacu97@gmail.com";
function solicitud() {
  const credentials = {
    email: email,
    password: pass
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  };

  fetch("http://dogs.magnet.cl/api/v1/auth/", options)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("No se pudo autenticar. Verifica tus credenciales.");
      }
    })
    .then((data) => {
      const token = data.token;
      console.log("Token JWT:", token);
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

  // const options = {
  //   method:'POST',
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     "email": email,
  //     "password": pass
  //   })
  // }

  // fetch("http://dogs.magnet.cl/api/v1/auth/", options)
  // .then(response => {
  //   if (response.ok)
  //     return response.text();

  //   throw new Error(response.status);
  // })
  // .then(data => {
  //   console.log("Datos: " + data);
  // })
  // .catch(err => {
  //   console.error("ERROR: ", err.message)
  // });
}
