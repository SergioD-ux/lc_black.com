<?php

if(isset($_POST['email'])) {

$email_to = "comercial@lc.com.pe";
$email_subject = "Contacto desde web";
$email_from = $_POST['email'];

if(envio_mail($email_to,$email_subject,$email_from)){
    //echo 'Enviado Correctamente';
    //header('Location: ../index.html#contact'); 
    //echo "<script>$(function() { $('#modalForm').modal('show'); });</script>";
    echo "Enviado";
}
else{
    echo 'Error';
}

}

function envio_mail($to,$subject,$from){
    $resultado;
// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['name']) ||
!isset($_POST['subject']) ||
!isset($_POST['email']) ||
!isset($_POST['message'])) {
$resultado=false;
}
else{
    $message = "Detalles del formulario de contacto:\n\n";
$message .= "Nombre: " . $_POST['name'] . "\n";
$message .= "E-mail: " . $_POST['email'] . "\n";
$message .= "Asunto: " . $_POST['subject'] . "\n";
$message .= "Mensaje: " . $_POST['message'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
$headers  = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/plain; charset=utf-8\n";
$headers .= "X-Priority: 3\n";
$headers .= "X-MSMail-Priority: Normal\n";
$headers .= "X-Mailer: php\n";
$headers .= "From: \"".$_POST['name']."\" <".$from.">\n";
@mail($to, $subject, $message, $headers);
$resultado = true;
}

return $resultado;
}
?>