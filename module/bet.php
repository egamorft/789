<?php
global $bet;
global $bets;
global $bet_metas;
global $bet_meta;
$bets = new StdArrays();
$bets['id'] = "bet";
factory(!define("_bet_","_bet_") ?: _bet_,$bets,new FsContainer(__CACHE__."/bets"));
$bet_meta = [
    "name" => [
        "type" => "string",
    ],
    "member" => [
        "type" => "factory",
        "value" => $members
    ],
    "number" => [
        "type" => "string",
    ],
    "point" => [
        "type" => "integer",
    ],
    "amount" => [
        "type" => "integer",
    ],
    "code" => [
        "type" => "string",
    ],
    "term" => [
        "type" => "string",
    ],
    "index" => [
        "type" => "integer",
    ],
    "status" => [
        "type" => "array",
        "value" => ["win","await","lose"]
    ],
];
$bets->setValidation(new Validation($bet_meta));