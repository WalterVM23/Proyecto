
const editar = new bootstrap.Modal(document.getElementById('modalEditar'))

let formularioeditar =document.getElementById('formularioEditar');

function editarModal(id, nombre, descripcion, tiempo, usuario)
{
    editar.show();
    document.getElementById("idEditar").value = id;
    document.getElementById("nombreEditar").value = nombre;
    document.getElementById("descripcionEditar").value = descripcion;
    document.getElementById("tiempoEditar").value = tiempo;
    document.getElementById("usuarioEditar").value = usuario;



}

formulario.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    // campos de entrada 
    let id = document.getElementById("idEditar").value;
    let nombre = document.getElementById("nombreEditar").value;
    let descripcion = document.getElementById("descripcionEditar").value;
    let tiempo = document.getElementById("tiempoEditar").value;
    let usuario = document.getElementById("usuarioEditar").value;

    var datasend = {
        id:id,
        nombre: nombre,
        descripcion: descripcion,
        tiempo: tiempo,
        usuario: usuario
    };
    console.log(datasend);
    if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
        console.log("datos");
        alert("Datos Vacios");
        return;
      } else {
        console.log("aprobado");
      }
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarCursos.php",
    {
        method: 'POST',
        body:JSON.stringify(datasend)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Curso editado correctamente.");
            editar.hide(); // Oculta el modal
            
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
