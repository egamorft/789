<?php
use Monolog\Level;
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
$_LOG = new Logger("a");
function __warning(string $message){
    global $_LOG;
    $_LOG->pushHandler(new StreamHandler(__LOG__.'/waring.log',Level::Warning));
    $_LOG->warning($message);
    $_LOG->popHandler();
};
function __info(string $message){
    global $_LOG;
    $_LOG->pushHandler(new StreamHandler(__LOG__.'/info.log',Level::Info));
    $_LOG->info($message);
    $_LOG->popHandler();
};
function __error(string $message){
    global $_LOG;
    $_LOG->pushHandler(new StreamHandler(__LOG__.'/error.log',Level::Error));
    $_LOG->error($message);
    $_LOG->popHandler();
};