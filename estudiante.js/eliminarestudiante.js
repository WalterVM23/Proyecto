const eliminarEstudianteMo = new bootstrap.Modal(document.getElementById('modalEliminarE'));

function modalEstudianteE(id, cedula,nombre,apellidopaterno,apellidomaterno) {
   eliminarEstudianteMo.show();
  document.getElementById("idEliminarE").value = id;
  document.getElementById("cedulaEliminarE").value = cedula;
  document.getElementById("nombreEliminarE").value = nombre;
  document.getElementById("apellidopaternoE").value = apellidopaterno;
  document.getElementById("apellidomaternoE").value = apellidomaterno;

}
function eliminarEstudiante() {
  const datasend = {
    id:document.getElementById('idEliminarE').value
  };
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarEstudiantes.php",
    {
      method: 'POST',
      body: JSON.stringify(datasend)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        eliminarEstudianteMo.hide(); 
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