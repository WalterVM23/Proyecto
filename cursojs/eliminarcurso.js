const eliminarCursoMo = new bootstrap.Modal(document.getElementById('modalEliminar'));

function modalDelete(id, nombre,descripcion) {
   eliminarCursoMo.show();
  document.getElementById("idEliminar").value = id;
  document.getElementById("nombreEliminar").value = nombre;
  document.getElementById("descripcionEliminar").value = descripcion;

}
function eliminarCurso() {
  const datasend = {
    id:document.getElementById('idEliminar').value,
  };
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarCursos.php",
    {
      method: 'POST',
      body: JSON.stringify(datasend)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        eliminarCursoMo.hide(); // Oculta el modal
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