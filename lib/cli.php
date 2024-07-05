<?php
$_ENV = [];
foreach ($argv as $key => $value) {
    if(substr($value,0,1) == "-"){
        $k = substr($value,1);
        $_ENV[$k] = $key + 1;
    };
};
foreach ($_ENV as $key => $value) {
    $_ENV[$key] = $argv[$value];
};