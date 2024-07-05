<?php
require_once __DIR__."/init.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    try {
        $data = cuoc($_POST['Tickets'],$_POST['Term'],$_POST['IgnorePrice']);
        $rs = [
            "Tx" => "b4119e78-227b-4b0a-877b-f74ed55d6494",
            "Term" => currentterm(),
            "GameType" => $data[1],
            "BetType" => $data[0],
            "TicketNumber" => 1,
            "Amount" => $data[3],
        ];
        echo json_encode($rs);
    } catch (\Throwable $th) {
        throw $th;
    };
};
