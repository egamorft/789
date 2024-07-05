<?php
global $kqxs;
global $kqxss;
global $kqxs_metas;
global $kqxs_meta;
$kqxss = new StdArrays();
$kqxss['id'] = "kqxs";
factory(!define("_kqxs_","_kqxs_") ?: _kqxs_,$kqxss,new FsContainer(__CACHE__."/kqxss"));
$kqxs_meta = [
    "term" => [
        "type" => "string",
    ],
    "db" => [
        "type" => "string",
    ],
    "g1" => [
        "type" => "string",
    ],
    "g2" => [
        "type" => "string",
    ],
    "g3" => [
        "type" => "string",
    ],
    "g4" => [
        "type" => "string",
    ],
    "g5" => [
        "type" => "string",
    ],
    "g6" => [
        "type" => "string",
    ],
    "g7" => [
        "type" => "string",
    ],
    "status" => [
        "type" => "array",
        "value" => ["active","block"]
    ],
];
$kqxss->setValidation(new Validation($kqxs_meta));