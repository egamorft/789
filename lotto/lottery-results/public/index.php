<?php
require_once __DIR__."/../init.php";
res(function(){
    global $kqxss;
    $date = @$_GET['date'] ?? "";
    $kqxs = null;
    foreach ($kqxss as $key => $value) {
      if(!is_arrays($value)) continue;
      if($value['term'] == $date){
        $kqxs = $value;
      }
    }
    if(!$kqxs){
      return new JsonResponse();
    }
    $data = [
        [
          "Type" => 0,
          "CityName" => "Hà Nội"
        ],
        [
          "Type" => 4,
          "CityName" => "Hà Nội",
          "Result" => "9387"
        ]
    ];
    $data[0] = array_merge($data[0],[
      "Term" => $kqxs['term'],
      "GameType" => 0,
      "Jackpot" => $kqxs['db'],
      "First" => $kqxs['g1'],
      "Second" => explode(",",$kqxs['g2']),
      "Third" => explode(",",$kqxs['g3']),
      "Fourth" => explode(",",$kqxs['g4']),
      "Fiveth" => explode(",",$kqxs['g5']),
      "Sixth" => explode(",",$kqxs['g6']),
      "Seventh" => explode(",",$kqxs['g7']),
    ]);
    return new JsonResponse($data);
});