const editarEstudiante = new bootstrap.Modal(document.getElementById('modalEditarE'))

let formularioeditarE =document.getElementById('formularioEditarE');

function editarModalE(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, 
    direccion, nombre, apellidopaterno, apellidomaterno, nacionalidad, idCarreras, usuario)
{
    editarEstudiante.show();
    document.getElementById("idEditar").value = id;
    document.getElementById("cedulaEditar").value = cedula;
    document.getElementById("correoelectronicoEditar").value = correoelectronico;
    document.getElementById("telefonoEditar").value = telefono;
    document.getElementById("telefonocelularEditar").value = telefonocelular;
    document.getElementById("fechanacimientoEditar").value = fechanacimiento;
    document.getElementById("sexoEditar").value = sexo;
    document.getElementById("direccionEditar").value = direccion;
    document.getElementById("nombreEditar").value = nombre;
    document.getElementById("apellidopaternoEditar").value = apellidopaterno;
    document.getElementById("apellidomaternoEditar").value = apellidomaterno;
    document.getElementById("nacionalidadEditar").value = nacionalidad;
    document.getElementById("idCarrerasEditar").value = idCarreras;
    document.getElementById("usuarioEditar").value = usuario;


}

formularioeditarE.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    // campos de entrada 
    let id = document.getElementById("idEditar").value;
    let cedula = document.getElementById("cedulaEditar").value;
    let correoelectronico = document.getElementById("correoelectronicoEditar").value;
    let telefono = document.getElementById("telefonoEditar").value;
    let telefonocelular = document.getElementById("telefonocelularEditar").value;
    let fechanacimiento = document.getElementById("fechanacimientoEditar").value;
    let sexo = document.getElementById("sexoEditar").value;
    let direccion = document.getElementById("direccionEditar").value;
    let nombre = document.getElementById("nombreEditar").value;
    let apellidopaterno = document.getElementById("apellidopaternoEditar").value;
    let apellidomaterno = document.getElementById("apellidomaternoEditar").value;
    let nacionalidad = document.getElementById("nacionalidadEditar").value;
    let idCarreras = document.getElementById("idCarrerasEditar").value;
    let usuario = document.getElementById("usuarioEditar").value;

    var datasend = {
        id:id,
        cedula: cedula,
        correoelectronico: correoelectronico,
        telefono: telefono,
        telefonocelular: telefonocelular,
        fechanacimiento:fechanacimiento,
        sexo:sexo,
        direccion:direccion,
        nombre:nombre,
        apellidopaterno:apellidopaterno,
        apellidomaterno:apellidomaterno,
        nacionalidad:nacionalidad,
        idCarreras:idCarreras,
        usuario:usuario
    };
    console.log(datasend);
    if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
        console.log("datos");
        alert("Datos Vacios");
        return;
      } else {
        console.log("aprobado");
      }
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarEstudiantes.php",
    {
        method: 'POST',
        body:JSON.stringify(datasend)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Curso editado correctamente.");
            editarEstudiante.hide(); // Oculta el modal
            
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
