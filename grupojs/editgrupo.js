const editarG = new bootstrap.Modal(document.getElementById('modalEditar'))

let formularioGrupo =document.getElementById('formularioEditarG');

function editarModalG(id, nombre)
{
    editarG.show();
    document.getElementById("idGrupo").value = id;
    document.getElementById("nombreGrupo").value = nombre;
    



}

formularioGrupo.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    // campos de entrada 
    let id = document.getElementById("idGrupo").value;
    let nombre = document.getElementById("nombreGrupo").value;

    var datasend = {
        id:id,
        nombre: nombre,

    };
    console.log(datasend);
    if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
        console.log("datos");
        alert("Datos Vacios");
        return;
      } else {
        console.log("aprobado");
      }
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarGrupo.php",
    {
        method: 'POST',
        body:JSON.stringify(datasend)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Curso editado correctamente.");
            editarG.hide(); // Oculta el modal
            
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
