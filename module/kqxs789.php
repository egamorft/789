<?php
global $kqxs789;
global $kqxs789s;
global $kqxs789_metas;
global $kqxs789_meta;
$kqxs789s = new StdArrays();
$kqxs789s['id'] = "kqxs789";
factory(!define("_kqxs789_","_kqxs789_") ?: _kqxs789_,$kqxs789s,new FsContainer(__CACHE__."/kqxs789s"));
$kqxs789_meta = [
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
$kqxs789s->setValidation(new Validation($kqxs789_meta));