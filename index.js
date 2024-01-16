
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
