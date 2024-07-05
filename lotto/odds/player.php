<?php
require_once __DIR__."/../init.php";
$betTypes = @$_GET['betTypes'] ?? 0;
$gameTypes = @$_GET['gameTypes'] ?? 0;
$betTypes = intval($betTypes);
$gameTypes = intval($gameTypes);
$data = require_once __ROOT__."/game.php";
$rs = null;
foreach ($data as $key => $value) {
    if($value['GameType'] == $gameTypes && $value['BetType'] == $betTypes){
        $rs = $value;
    };
};
$as =  [];
$as[] = [
    "GameType" => $gameTypes,
    "BetType" => $betTypes,
    "Price" => $rs['Price'],
    "Numbers" => [
        [
            "Number" => "90",
            "ExtraPrice" => 15
        ]
    ]
];
echo json_encode($as);