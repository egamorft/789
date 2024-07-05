<?php
require_once __DIR__."/../init.php";
function ymd($data){
    return DateTime::createFromFormat('d/m/Y',$data)->format('Y-m-d');
}