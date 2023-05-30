const modal = new bootstrap.Modal(document.getElementById('modalCreate'))

let formulario =document.getElementById('formulario');

function abrirModal()
{
    modal.show();
}

formulario.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    console.log(document.getElementById('nombre'))
    const datosEnviar = { 
      
        nombre:document.getElementById('nombre').value,
        descripcion:document.getElementById('descripcion').value,
        tiempo:document.getElementById('tiempo').value,
        usuario:'Walter'
    }
    console.log(datosEnviar);
    if (Object.entries(datosEnviar).some(([key, value]) => value === "") == true) {
        console.log("datos");
        alert("Datos Vacios");
        return;
      } else {
        console.log("aprobado");
      }
   console.log(datosEnviar);

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarCursos.php",
    {
        method: 'POST',
        body:JSON.stringify(datosEnviar)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Curso agregado correctamente.");
            modal.hide(); // Oculta el modal
            
            contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
            cargarDatos(); // Vuelve a cargar los datos actualizados
      
          } else {
            alert("Error al enviar los datos.");
          }
        })
        .catch(function (error) {
          console.log(error);
          alert("Error al enviar los datos Catch");
        });
      });
