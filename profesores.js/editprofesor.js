const editarProfesores = new bootstrap.Modal(document.getElementById('modalEditarP'))

let formularioeditarP =document.getElementById('formularioEditarP');

function editarModalP(id, cedula, correoelectronico, telefono, telefonocelular, fechanacimiento, sexo, 
    direccion, nombre, apellidopaterno, apellidomaterno, idCarreras, usuario, nacionalidad)
{
    editarProfesores.show();
    document.getElementById("idEditarP").value = id;
    document.getElementById("cedulaEditarP").value = cedula;
    document.getElementById("correoelectronicoEditarP").value = correoelectronico;
    document.getElementById("telefonoEditarP").value = telefono;
    document.getElementById("telefonocelularEditarP").value = telefonocelular;
    document.getElementById("fechanacimientoEditarP").value = fechanacimiento;
    document.getElementById("sexoEditarP").value = sexo;
    document.getElementById("direccionEditarP").value = direccion;
    document.getElementById("nombreEditarP").value = nombre;
    document.getElementById("apellidopaternoEditarP").value = apellidopaterno;
    document.getElementById("apellidomaternoEditarP").value = apellidomaterno;
    document.getElementById("idCarrerasEditarP").value = idCarreras;
    document.getElementById("usuarioEditarP").value = usuario;
    document.getElementById("nacionalidadEditarP").value = nacionalidad;


}

formularioeditarP.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    // campos de entrada 
    let id = document.getElementById("idEditarP").value;
    let cedula = document.getElementById("cedulaEditarP").value;
    let correoelectronico = document.getElementById("correoelectronicoEditarP").value;
    let telefono = document.getElementById("telefonoEditarP").value;
    let telefonocelular = document.getElementById("telefonocelularEditarP").value;
    let fechanacimiento = document.getElementById("fechanacimientoEditarP").value;
    let sexo = document.getElementById("sexoEditarP").value;
    let direccion = document.getElementById("direccionEditarP").value;
    let nombre = document.getElementById("nombreEditarP").value;
    let apellidopaterno = document.getElementById("apellidopaternoEditarP").value;
    let apellidomaterno = document.getElementById("apellidomaternoEditarP").value;
    let idCarreras = document.getElementById("idCarrerasEditarP").value;
    let usuario = document.getElementById("usuarioEditarP").value;
    let nacionalidad = document.getElementById("nacionalidadEditarP").value;

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
        idCarreras:idCarreras,
        usuario:usuario,
        nacionalidad:nacionalidad,

    };
    console.log(datasend);
    if (Object.entries(datasend).some(([key, value]) => value === "") == true) {
        console.log("datos");
        alert("Datos Vacios");
        return;
      } else {
        console.log("aprobado");
      }
    fetch("https://paginas-web-cr.com/ApiPHP/apis/ActualizarProfesores.php",
    {
        method: 'POST',
        body:JSON.stringify(datasend)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Curso editado correctamente.");
            editarProfesores.hide(); // Oculta el modal
            
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
