<?php
require_once __DIR__."/../init.php";
$data = require_once __ROOT__."/game.php";
echo json_encode($data);