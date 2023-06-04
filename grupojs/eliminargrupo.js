const eliminarGrupoMo = new bootstrap.Modal(document.getElementById('modalElimina'));

function modalEliminarG(id, nombre) {
   eliminarGrupoMo.show();
  document.getElementById("idEliminar").value = id;
  document.getElementById("nombreEliminar").value = nombre;
  console.log(nombre);

}
function eliminarGrupo() {
  const datasend = {
    id:document.getElementById('idEliminar').value
  };
  
  fetch("https://paginas-web-cr.com/ApiPHP/apis/BorrarGrupo.php",
    {
      method: 'POST',
      body: JSON.stringify(datasend)
    }).then(function (response) {
      //Manejo la respuesta de la API
      if (response.ok) {
        console.log(datasend);
        eliminarGrupoMo.hide(); // Oculta el modal
        contenidoTablaResultado.innerHTML = ""; // Limpia el contenido de la tabla
        cargarDatos(); // Vuelve a cargar los datos actualizados
        alert("Eliminando datos!");
      } else {
        alert("Datos invalidos");
      }
    })
    .catch(function (error) {
      console.log(error);
      alert("Error al enviar los datos Catch");
    });
}
cargarDatos();