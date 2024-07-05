<?php
require_once __DIR__."/_init.php";
global $config;
global $id;
require_once __MODULE__."/user.php";
require_once __MODULE__."/member.php";
require_once __MODULE__."/kqxs.php";
require_once __MODULE__."/kqxs789.php";
require_once __MODULE__."/transaction.php";
require_once __MODULE__."/bet.php";
require_once __MODULE__."/jwt.php";
require_once __LIB_MODULE__;
global $_LANGUAGE;
$_LANGUAGE = [];
load_module(__DIR__);
date_default_timezone_set("Asia/Ho_Chi_Minh");
