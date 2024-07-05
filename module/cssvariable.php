<?php
global $cssvariable;
global $cssvariables;
global $cssvariable_metas;
global $cssvariable_meta;
$cssvariables = new StdArrays();
$cssvariables['id'] = "cssvariable";
factory(!define("_CSSVARIABLE_","_CSSVARIABLE_") ?: _CSSVARIABLE_,$cssvariables,new FsContainer(__CACHE__."/cssvariables"));
$cssvariable_meta = [
    "key" => [
        "type" => "string",
    ],
    "value" => [
        "type" => "string",
    ],
    "status" => [
        "type" => "array",
        "value" => ["active","block"]
    ],
];
$cssvariables->setValidation(new Validation($cssvariable_meta));