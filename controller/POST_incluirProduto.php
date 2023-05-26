<?php

var_dump($_POST)

$dados = json_decode(file_get_contents('php://input'));
$json = json_encode($dados);

echo $json;
?>