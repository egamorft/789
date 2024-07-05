<?php
require_once __DIR__."/../init.php";
headercross();
$_POST = json_decode(file_get_contents("php://input"), true);