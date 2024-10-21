<?php
header('Access-Control-Allow-Origin:*');
header("Content-Type: application/json; charset=UTF-8");
require 'connect.php';
$conn = connectionDB();

$sql = "SELECT * FROM user WHERE Id= 1";
$result = mysqli_query($conn,$sql);

$friends = [];

if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_assoc($result)){
        $friends[] = $row;
    }
    echo json_encode($friends);
} else {
    echo "";
}


?>