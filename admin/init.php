<?php
require_once __DIR__."/../init.php";
define("CSM_TITLE","Admin");
if(empty(@$user['username'])){
    header("Location: ".ADMIN_LOGIN);exit;
}
$include = __INCLUDE__."/head.php";
$menus = require_once __CONFIG__."/admin-menu.php";;
$metas = [
	"hwid" => [
		"router" => "hwid.php",
	],
	"member" => [
		"router" => "thanhvien.php",
	]
];
if(isset($_GET["search"])){
    header("Location: search.php?key=".$_GET["search"]);
    exit;
}