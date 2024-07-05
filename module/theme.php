<?php
global $theme;
global $themes;
global $theme_metas;
global $theme_meta;
$themes = new StdArrays();
$themes['id'] = "theme";
factory(!define("_THEME_","_THEME_") ?: _THEME_,$themes,new FsContainer(__CACHE__."/themes"));
$theme_meta = [
    "name" => [
        "type" => "string",
    ],
    "style" => [
        "type" => "string",
    ],
    "status" => [
        "type" => "array",
        "value" => ["active","block"]
    ],
];
$themes->setValidation(new Validation($theme_meta));
