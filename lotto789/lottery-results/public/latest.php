<?php
require_once __DIR__."/../init.php";
res(function(){
    global $kqxss;
    foreach ($kqxss as $key => $value) {
      if(!is_arrays($value)) continue;
    }
    $kqxs = $value;
    return new JsonResponse([
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
});