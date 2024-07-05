<?php
global $transaction;
global $transactions;
global $transaction_metas;
global $transaction_meta;
$transactions = new StdArrays();
$transactions['id'] = "transaction";
factory(!define("_transaction_","_transaction_") ?: _transaction_,$transactions,new FsContainer(__CACHE__."/transactions"));
$transaction_meta = [
    "code" => [
        "type" => "string",
    ],
    "amount" => [
        "type" => "integer",
    ],
    "content" => [
        "type" => "string",
    ],
    "bank" => [
        "type" => "string",
    ],
    "status" => [
        "type" => "array",
        "value" => ["active","await","block"]
    ],
];
$transactions->setValidation(new Validation($transaction_meta));