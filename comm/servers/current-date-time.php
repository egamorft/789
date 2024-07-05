<?php
require_once __DIR__."/../init.php";
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo '{
        "Timestamp": '.time().'
    }';
};