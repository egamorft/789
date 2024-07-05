<?php
global $setting;
global $settings;
global $setting_metas;
global $setting_meta;
$settings = new StdArrays();
$settings['id'] = "setting";
factory(!define("_SETTING_","_SETTING_") ?: _SETTING_,$settings,new FsContainer(__CACHE__."/settings"));
$setting_meta = [
    "name" => [
        "type" => "string"
    ],
    "title" => [
        "type" => "string"
    ],
    "logo" => [
        "type" => "string"
    ],
    "theme" => [
        "type" => "factory",
        "value" => $themes
    ],
    "color" => [
        "type" => "color"
    ],
    "alert" => [
        "type" => "string"
    ],
    "maintenance" => [
        "type" => "bool"
    ],
];
$settings->setValidation(new Validation($setting_meta));
$setting = $settings['default'];