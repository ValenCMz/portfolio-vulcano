
document.addEventListener('DOMContentLoaded', function () {
  var enlacesMenu = document.querySelectorAll('.v49_69_1 a')

  enlacesMenu.forEach(function (enlace) {
    enlace.addEventListener('click', function (e) {
      e.preventDefault()

      var objetivoId = this.getAttribute('href').substring(1)
      var objetivo = document.getElementById(objetivoId)

      if (objetivo) {
        objetivo.scrollIntoView({
          behavior: 'smooth',
        })
      }
    })
  })
})
/* 
document.addEventListener('DOMContentLoaded', function () {
  var formulario = document.querySelector('form')

  formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    var nombre = document.getElementById('nombre').value.trim()
    var correo = document.getElementById('correo').value.trim()
    var mensaje = document.getElementById('mensaje').value.trim()

    if (nombre === '' || correo === '' || mensaje === '') {
      alert('Por favor, completa todos los campos.')
      return
    }

    enviarDatos(nombre, correo, mensaje)
  })

  function enviarDatos(nombre, correo, mensaje) {
    fetch('tu_script_de_procesamiento.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, mensaje }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Hubo un problema con la solicitud.')
        }
        return response.json()
      })
      .then((data) => {
        console.log('Datos enviados correctamente:', data)
        alert('¡Datos enviados correctamente!')
      })
      .catch((error) => {
        console.error('Error al enviar datos:', error)
        alert('Hubo un problema al enviar los datos.')
      })
  }
}) */


const typed = new Typed('.typed', {
  strings: ['Y ESTO ES LO QUE HAGO.'],
  //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
  typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
  startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
  backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
  smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
  shuffle: false, // Alterar el orden en el que escribe las palabras.
  backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
  loop: true, // Repetir el array de strings
  loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
  showCursor: true, // Mostrar cursor palpitanto
  cursorChar: '|', // Caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
});


// Cuando el usuario llega a ver este elemento en la pantalla, hace una animacion que aparece desde izquierda a derecha

document.addEventListener('DOMContentLoaded', function () {
  const element_scroll = document.querySelectorAll(".scroll_animation");

  function checkVisibility() {
    element_scroll.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight) {
        element.classList.add('show');
      }
    });

  }

  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});

