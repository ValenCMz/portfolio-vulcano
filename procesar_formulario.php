<?php
header("Content-Type: application/json");

$nombre = isset($_POST['nombre']) ? $_POST['nombre'] : '';
$correo = isset($_POST['correo']) ? $_POST['correo'] : '';
$mensaje = isset($_POST['mensaje']) ? $_POST['mensaje'] : '';

if (empty($nombre) || empty($correo) || empty($mensaje)) {
    echo json_encode(['error' => 'Por favor, completa todos los campos.']);
    exit;
}

// Correo de destino
$correoDestino = 'Lautarvulcano@gmail.com'; 

$asunto = '¡Un mensaje nuevo de tu increíble CV!';
$contenidoCorreo = "Nombre: $nombre\nCorreo: $correo\nMensaje:\n$mensaje";

$envioExitoso = mail($correoDestino, $asunto, $contenidoCorreo);

if ($envioExitoso) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['error' => 'Hubo un problema al enviar el correo.']);
}
?>
