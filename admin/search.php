<?php
require_once __DIR__."/init.php";
$key = $_GET["key"];
$id = null;
foreach ($hwids as $k => $value) {
    if(!is_arrays($value)) continue;
    if($value['hwid'] == $key || $value['telegram'] == $key){
        $id = $k;
        break;
    }
}
if($id){
    header("Location: xtoolaccount.php?key=hwid&value=".$id);
    exit;
}else{
    header("Location: xtoolaccount.php");
}
