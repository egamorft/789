<?php
require_once __DIR__."/../../init.php";
function convert($x){
    $d = $x[0];
    $k = explode("-",$d['code']);
    $num = [];
    $point = 0;
    $amount = 0;
    foreach ($x as $key => $value) {
        $num[] = $value['number'];
        $point += $value['point'];
        $amount += $value['amount'];
    }
    $arr = [
        "Term" => $d['term'],
        "TicketNumber" => $d['index'],
        "GameType" => $k[0],
        "BetType" => $k[1],
        "Numbers" => $num,
        "Point" => $point,
        "Amount" => $amount,
        "Status" => 1,
        "CreatedAt" => $d['created']->format(DATE_W3C),
    ];
    return $arr;
};
function betss(){
    global $bets;
    global $member;
    $data = [];
    foreach ($bets as $key => $value) {
        if(!is_arrays($value)) continue;
        if($value['member'] == $member['id']){
            $index = $value['index'];
            if(is_array(@$data[$index])){
                array_push($data[$index],$value);
            }else{
                $data[$index] = [$value];
            };
        };
    };
    foreach ($data as $key => $value) {
        $rs[] = convert($value);
    };
    return $rs;
};