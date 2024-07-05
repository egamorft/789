<?php
global $jwt;
global $jwts;
global $jwt_metas;
global $jwt_meta;
$jwts = new StdArrays();
$jwts['id'] = "jwt";
factory(!define("_jwt_","_jwt_") ?: _jwt_,$jwts,new FsContainer(__CACHE__."/jwts"));
$jwt_meta = [
    "member" => [
        "type" => "factory",
        "value" => $members
    ],
    "AccessToken" => [
        "type" => "string",
    ],
    "ExpiresIn" => [
        "type" => "string",
    ],
    "IdToken" => [
        "type" => "string",
    ],
    "RefreshToken" => [
        "type" => "string",
    ],
    "TokenType" => [
        "type" => "string",
    ],
    "status" => [
        "type" => "array",
        "value" => ["active","block"]
    ],
];
$jwts->setValidation(new Validation($jwt_meta));