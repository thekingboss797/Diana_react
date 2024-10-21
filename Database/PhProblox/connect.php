<?php

header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Header: X-API-KEY, Origin, X-Requested-With');
header("Content-Type: application/json; charset=UTF-8");
$method = $_SERVER['REQUEST_METHOD'];

function connectionDB(){

    $servidor ="localhost";
    $usuario = "root";
    $password = "";
    $bd = "roblox";

    $conexion = mysqli_connect($servidor,$usuario,$password,$bd);

    if($conexion){
        echo "";
    } else {
        echo 'ha sucedido un error inesperado';
    }

    return $conexion;
}
?>