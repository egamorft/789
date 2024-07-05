<?php
require_once __DIR__."/init.php";
res(function(){
    global $kqxss;
    $data = file_get_contents("https://www.mu88.live/api/front/open/lottery/history/list/1/miba");
    $data = json_decode($data,true);
    if(@$data['success'] != true) throw new Exception("Error Processing Request",400);
    $issueList = $data['t']['issueList'];
    foreach ($kqxss as $key => $value) {
        if(!is_arrays($value)) continue;
        foreach ($issueList as $k1 => $v1) {
            $detail = $v1['detail'];
            $detail = json_decode($detail,true);
            $turn = ymd($v1['turnNum']);
            if($value['term'] == $turn){
                $value['db'] = $detail[0];
                $value['g1'] = $detail[1];
                $value['g2'] = $detail[2];
                $value['g3'] = $detail[3];
                $value['g4'] = $detail[4];
                $value['g5'] = $detail[5];
                $value['g6'] = $detail[6];
                $value['g7'] = $detail[7];
                unset($issueList[$k1]);
            };
        };
    };
    foreach ($issueList as $k1 => $v1) {
        $detail = $v1['detail'];
        $detail = json_decode($detail,true);
        $id = uniqid();
        $value = arrs([
            "id" => $id,
            "status" => "active",
            "term" => ymd($v1['turnNum']),
            "created" => new DateTime(),
        ]);
        $value['db'] = $detail[0];
        $value['g1'] = $detail[1];
        $value['g2'] = $detail[2];
        $value['g3'] = $detail[3];
        $value['g4'] = $detail[4];
        $value['g5'] = $detail[5];
        $value['g6'] = $detail[6];
        $value['g7'] = $detail[7];
        $kqxss[$id] = $value;
    };
    return new JsonResponse($value);
});