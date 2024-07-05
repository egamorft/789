<?php
require_once __DIR__."/../init.php";
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    authjwt();
    $data = children();
    $rs = [
      "Size" => 20,
      "Page" => 1,
      "TotalPages" => 1,
      "TotalRecords" => count($data),
      "Records" => $data
    ];
    echo json_encode($rs);
};