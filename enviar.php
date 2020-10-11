<?php
//campos
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];

//Datos del Correo
$destinatario="victorlopez73157@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= _"Correo: $correo \n";
$carta .= "Telefono: $telefono \n";
$carta .= "Mensaje: $mensaje";

//Envio de mensajes
mail($destinatario, $asunto, $carta);
header('Location:mensaje-de-envio.html')
?>
