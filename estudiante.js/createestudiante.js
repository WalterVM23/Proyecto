const modalE = new bootstrap.Modal(document.getElementById('modalCreateE'))

let formularioE =document.getElementById('formularioE');

function abrirModalE()
{
    modalE.show();
}

formulario.addEventListener('submit', function(e)
{
    alert('salvando');
    e.preventDefault(); // para frenar y que no recargue
    console.log(document.getElementById('nombre'))
    const datosEnviar = { 
      
    cedula:document.getElementById('cedulaAg').value,
    correoelectronico:document.getElementById('correoelectronicoAg').value,
    telefono:document.getElementById('telefonoAg').value,
    telefonocelular:document.getElementById('telefonocelularAg') .value,
    fechanacimiento:document.getElementById('fechanacimientoAg').value,
    sexo:document.getElementById('sexoAg').value,
    direccion:document.getElementById('direccionAg').value,
    nombre:document.getElementById('nombreAg').value, 
    apellidopaterno:document.getElementById('apellidopaternoAg').value,
    apellidomaterno:document.getElementById('apellidomaternoAg').value,
    nacionalidad:document.getElementById('nacionalidadAg').value,
    idCarreras:document.getElementById('idCarrerasAg').value,
    usuario:"Walter"
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

    fetch("https://paginas-web-cr.com/ApiPHP/apis/InsertarEstudiantes.php",
    {
        method: 'POST',
        body:JSON.stringify(datosEnviar)

    })//url de peticion 
    
    .then(function (response) {
        console.log("prueba 1");
          //Manejo la respuesta de la API
          if (response.ok) {
            alert("Estudiante agregado correctamente.");
            modalE.hide(); // Oculta el modal
            
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
