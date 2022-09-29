function mostrar_insumos_segun_perfil() {

    $("#precargando").css("visibility", "visible");

  $.ajax({
    url: "consulta_stock_insumos_operaciones.php",
    async: true, //asincronico para que pueda cargar el JS en IE
    dataType: "text",
    type: "post",
    data: {
      operacion: 1,
    },
    success: function (retorno) {
      //se agrega el contenido HTML
      $("#cuerpo").html(retorno);

    },
  }).fail(function (jqXHR, textStatus, errorThrown) {
    show_error(jqXHR.responseText);
  });

  $("#precargando").css("visibility", "hidden");
}


function mostrar_detalle_stock_insumos(){

//_$('nrodnidest').value
  if( $('#area_sector_filtro').val() == 'seleccion'){
    alert('Debe seleccionar una opcion');
    return;
  } 

  $("#precargando").css("visibility", "visible");
  $.ajax({
    url: "consulta_stock_insumos_operaciones.php",
    async: true, //asincronico para que pueda cargar el JS en IE
    dataType: "text",
    type: "post",
    data: {
      operacion: 2,
      id_insumo: $('#area_sector_filtro').val()
    },
    success: function (retorno) {
      //se agrega el contenido HTML
      $("#detalle_stock_insumos").html(retorno);

    },
  }).fail(function (jqXHR, textStatus, errorThrown) {
    show_error(jqXHR.responseText);
  });

  $("#precargando").css("visibility", "hidden");
}


function limpiar_consulta(){

  if( $('#area_sector_filtro').val() != 'seleccion'){

    $("#btn_mostrar_detalle_insumos").css("visibility", "visible");

  } else {
    $("#btn_mostrar_detalle_insumos").css("visibility", "hidden");
  }

  $("#detalle_stock_insumos").html("");

}