<?php
    $destino= 'rivac1@gmail.com';
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $contenido = "nombre: " .$nombre . "\nCorreo: " . $correo . "\nAsunto" . $asunto . "\nMensaje; " . $mensaje;
    mail($destino,"Contacto", $contenido);
    header("location:")


    
?>