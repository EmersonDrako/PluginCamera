<?php 
require "../conexion/conexion.php";
class Usuario{
public function imagen($img){

$classconex= new conex();
$conn=$classconex->conec();
$conn->enviarquery("INSERT INTO imagen(imagen) VALUES($img)");
}
}
 ?>