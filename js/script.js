$(document).ready(function(){

$('#btnSend').click(function(){
  var errores='';
  //validacion 1
  if ($('#names').val()==''){

errores +='<p>Ingresar un nombre o nombres</p>';
$('#names').css("border-bottom-color", "#F14B4B")

}else{
$('#names').css("border-bottom-color", "#D1D1D1")
  }
  //validacion 2
if ($('#email').val()==''){
errores +='<p>Ingresar correo electronico</p>';
$('#email').css("border-bottom-color", "#F14B4B")
}else{
$('#email').css("border-bottom-color", "#D1D1D1")
  }
  //validacion 3
  if ($('#mensaje').val()==''){
  errores +='<p>Escribir un mensaje</p>';
  $('#mensaje').css("border-bottom-color", "#F14B4B")
}else{
$('#mensaje').css("border-bottom-color", "#D1D1D1")
  }
//Enviando mensaje
if ( errores == '' == false){
  var mensajeModal= '<div class="modal_wrap">'+
  '<div class="mensaje_modal">'+
  '<h3>Errores encontrados</h3>'+
  errores+
  '<span id="btnClose">Cerrar</span>'+
      '</div>'+
  '</div>'
              $('body').append(mensajeModal);
}
//Cerrar Modal
$('#btnClose').click(function(){
  $('.modal_wrap').remove();
  });
});
});
