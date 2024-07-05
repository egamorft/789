<?php
global $user;
global $users;
global $user_meta;
global $user_metas;
$users = new StdArrays();
$users['id'] = "user";
factory(!define("_USER_","_USER_") ?: _USER_,$users,new FsContainer(__CACHE__."/users"));
$user_meta = [
    "username" => [
        "type" => "string",
    ],
    "password" => [
        "type" => "string",
    ],
    "type" => [
        "type" => "string",
    ],
    "logo" => [
        "type" => "string",
    ],
];
$users->setValidation(new Validation($user_meta));
@session_start();
$id = @$_SESSION['id'];
if($id){
    $user = $users[$id];
};