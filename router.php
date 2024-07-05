<?php
define("CLIENT_BASE",isset($_ENV['CLIENT_BASE']) ? $_ENV['CLIENT_BASE'] : "/client/");
define("ADMIN_BASE",isset($_ENV['ADMIN_BASE']) ? $_ENV['ADMIN_BASE'] : "/admin/");
define("STATIC_BASE",isset($_ENV['STATIC_BASE']) ? $_ENV['STATIC_BASE'] : "/static");
define("CLIENT_LOGIN",CLIENT_BASE."/login.php");
define("CLIENT_LOGOUT",CLIENT_LOGIN);
define("ADMIN_LOGIN",ADMIN_BASE."/login.php");
define("ADMIN_LOGOUT",ADMIN_LOGIN);

define("LOTTERY_BASE",isset($_ENV['LOTTERY_BASE']) ? $_ENV['LOTTERY_BASE'] : "/lotto/");
define("IDENTITY_BASE",isset($_ENV['IDENTITY_BASE']) ? $_ENV['IDENTITY_BASE'] : "/id/");
define("COMM_BASE",isset($_ENV['COMM_BASE']) ? $_ENV['COMM_BASE'] : "/comm/");
define("LOTTO789_BASE",isset($_ENV['LOTTO789_BASE']) ? $_ENV['LOTTO789_BASE'] : "/lotto789/");
define("REPORT_BASE",isset($_ENV['REPORT_BASE']) ? $_ENV['REPORT_BASE'] : "/report/");