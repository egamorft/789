<?php
require_once __DIR__."/../init.php";
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    authjwt();
    $data = [
        "Username" => $member['username'],
        "Level" => 9,
        "Path" => ",000000000000000000000001,5e905098f728a037ee997005,5ea59d4a36ed410007668120,5eb520230ef1180007e7a0cf,651a6303baee28bac32b0847,6540d78a242d74c78313060d,",
        "FullName" => "d50",
        "Balance" => $member['total'],
        "CreditLimit" => $member['total'],
        "PaymentMethod" => 0,
        "PlayerPaymentDates" => [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "Products" => [
          0,
          1,
          2,
          100,
          101,
          3
        ],
        "_MustChangePasswordNotify" => "Mật khẩu của quý khách sẽ hết hạn sử dụng sau 1 ngày."
    ];
    echo json_encode($data);
};