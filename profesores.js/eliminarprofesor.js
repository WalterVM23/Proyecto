const eliminarProfesorMo = new bootstrap.Modal(document.getElementById('modalEliminarP'));

function modalProfesorE(id, cedula,nombre,apellidopaterno,apellidomaterno) {
   eliminarProfesorMo.show();
  document.getElementById("idEliminar").value = id;
  document.getElementById("cedulaEliminar").value = cedula;
  document.getElementById("nombreEliminar").value = nombre;
  document.getElementById("apellidopaterno").value = apellidopaterno;
  document.getElementById("apellidomaterno").value = apellidomaterno;

}
function eliminarProfesor() {
  const datasend = {
    id:document.getElementById('idEliminar').value
  };
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarProfesores.php",
    {
      method: 'POST',
      body: JSON.stringify(datasend)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        eliminarProfesorMo.hide(); 
        contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
        cargarDatos(); // Vuelve a cargar los datos actualizados
        alert("Eliminando datos!");
      } else {
        alert("Error al enviar los datos.");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Error al enviar los datos Catch");
    });
}
cargarDatos();