<?php 
require "../modelo/modelobd.php";
//require "Cemail.php";
if(isset($_POST['action'])) {
    $action = $_POST['action'];
    switch($action) {
        case 'imagen' : imagen();break;
        // ...etc...
    }
}

 function imagen(){
$img = $_POST['img'];

$VerficarDatos= new Usuario();
$usuarioI=$VerficarDatos->imagen("$img");
echo $usuarioI;
}

 ?>