<?php
require_once __DIR__."/../init.php";
$rs = betss();
echo json_encode($rs);