var contenidoTablaResultado = document.querySelector('#resultados');

    function cargarDatos(){
        //alert('Cargue datos');
        fetch("https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php")//url de peticion de datos
        .then(respuesta => respuesta.json())//recibe los datos en formato json
       .then((datosrepuesta) => {
            steTabla(datosrepuesta.data)//lo envio para la funcion para darle tratamiento
       // console.log('Datos',datosrepuesta.data)//Muestra el resultado de la peticion
       })
       .catch(console.log)//muestra errores
    }

    function steTabla(datos){
        console.log('dato.........s', datos);
        //contenidoTablaResultado.innerHTML = 'test';
        for (const valor of datos) {
           // console.log('valor:',valor);
            //[{"id":"377","nombre":"hola leo","descripcion":"sdsd","tiempo":"asasa"},
            contenidoTablaResultado.innerHTML += `
                        <tr class="table-primary" >
                            <td scope="row">${valor.id}</td>
                            <td>${valor.nombre}</td>
                            <td>${valor.descripcion}</td>
                            <td>${valor.tiempo}</td>
                            <td>${valor.usuario}</td>
                           
                            <td>
                              <a name="" id="" class="btn btn-danger" onclick="modalDelete('${valor.id}', '${valor.nombre}',
                              '${valor.descripcion}')" role="button">Borrar</a>
                              ||
                              <a name="" id="" class="btn btn-primary" onclick="editarModal('${valor.id}', '${valor.nombre}', '${valor.descripcion}', '${valor.tiempo}','${valor.usuario}')" role="button">Editar</a>
                            </td>
                        </tr>`; 
        }
    }

 

cargarDatos();
