<?php
require_once __DIR__."/../init.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    authjwt();
    create($_POST['Username'],$_POST['Password'],$_POST['FullName'],$_POST['About']);
    $rs = [];
    echo json_encode($rs);
};
function create($username,$password,$fullname,$about){
    global $members;
    global $mid;
    $id = uniqid();
    $members[$id] = arrs([
        "username" => $username,
        "password" => $password,
        "name" => $fullname,
        "total" => 0,
        "parent" => $mid,
        "email" => $username."@gmail.com",
        "status" => "active",
        "created" => new DateTime(),
        "type" => "member"
    ]);
};