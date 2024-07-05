<?php
require_once __DIR__."/../init.php";
headercross();
$_POST = json_decode(file_get_contents("php://input"), true);
function children(){
    global $mid;
    global $members;
    $rs = [];
    foreach ($members as $key => $value) {
        if(!is_arrays($value)) continue;
        if($value['parent'] == $mid){
            $rs[] = convert($value);
        }
    }
    return $rs;
};
function convert($data){
    $rs = [
        "Id" => $data['id'],
        "Username" => $data['username'],
        "FullName" => $data['name'],
        "Level" => 9,
        "Status" => 1,
        "ParentId" => $data['parent'],
        "About" => $data['name'],
        "Suspended" => false,
        "Blocked" => false,
        "CreatedAt" => $data['created'],
        "CreditLimit" => $data['total'],
        "Balance" => $data['total'],
        "PaymentMethod" => 0,
        "PlayerPaymentDates" => [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ]
    ];
    return $rs;
};