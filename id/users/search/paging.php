<?php
require_once __DIR__."/../../init.php";
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    authjwt();
    $data = children();
    foreach ($data as $key => $value) {
        if($value['Username'] != $_GET['matchName']){
            unset($data[$key]);
        };
    };
    $rs = [
      "Size" => 20,
      "Page" => 1,
      "TotalPages" => 1,
      "TotalRecords" => count($data),
      "Records" => $data
    ];
    echo json_encode($rs);
};