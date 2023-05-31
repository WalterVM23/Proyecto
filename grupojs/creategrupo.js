const modalGrupo = new bootstrap.Modal(document.getElementById('modalCreateG'))

let formularioG =document.getElementById('formularioG');

function abrirModalG()
{
    modalGrupo.show();
}

formularioG.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    console.log(document.getElementById('nombre'))
    const datosEnviar = { 
      
        nombre:document.getElementById('nombre').value,
        
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

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarGrupo.php",
    {
        method: 'POST',
        body:JSON.stringify(datosEnviar)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Grupo agregado correctamente.");
            modalGrupo.hide(); // Oculta el modal
            
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
