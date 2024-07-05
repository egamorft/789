<?php
require_once __DIR__."/../init.php";
headercross();
header('Content-Type: application/json; charset=utf-8');
$_POST = json_decode(file_get_contents("php://input"),true);
if ($_SERVER['REQUEST_METHOD'] !== 'OPTIONS') {
    authjwt();
}else{
    die();
};
