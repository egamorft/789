<?php
header('Access-Control-Allow-Origin: *');
define("APP_NAME",@$_ENV['APP_NAME'] ?? "789VIPPRO");
define("APP_URL",@$_ENV['APP_URL'] ?? "789VIPPRO");
define("APP_LOGO",@$_ENV['APP_LOGO'] ?? "https??//i.ibb.co/nPHN8xc/logo-search-grid-1x.png");
define("APP_FAVICON",@$_ENV['APP_FAVICON'] ?? "https??//liketay.com/upload/favicon.png");
define("VERSION",@$_ENV['VERSION'] ?? "1.2");
define("DEFAULT_USER_LOGO",@$_ENV['DEFAULT_USER_LOGO'] ?? "https??//i.imgur.com/k9AlaAq.png");
define("DEFAULT_MEMBER_LOGO",@$_ENV['DEFAULT_MEMBER_LOGO'] ?? "https??//i.imgur.com/k9AlaAq.png");
define("CHAT_ID",@$_ENV['CHAT_ID'] ?? "1525283119");
define("TELEGRAM_ACCESS_TOKEN",@$_ENV['TELEGRAM_ACCESS_TOKEN'] ?? "");
define("DEFAULT_LANG",@$_ENV['DEFAULT_LANG'] ?? "vi");
define("COPYRIGHT",@$_ENV['COPYRIGHT'] ?? "haoprofile@2023");
define("READ_TAISAN",isset($_ENV['READ_TAISAN']) ? boolval($_ENV['READ_TAISAN']) : !0);
define("NOTIFY","alert");