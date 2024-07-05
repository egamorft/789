<?php
require_once __DIR__."/../../init.php";
echo '{
    "TodayWinLoseAmount": 0,
    "YesterdayWinLoseAmount": 0,
    "Outstanding": {
      "PlayerTotalAmount": 0,
      "BookieTotalAmount": 0,
      "Productions": [
        {
          "Production": 0,
          "PlayerTotalAmount": 0,
          "BookieTotalAmount": 0
        }
      ]
    },
    "UserOnline": 1,
    "TopPlayerStats": {
      "TopWin": [
        {
          "UserId": "663f19a5c9053320265bb711",
          "WinLose": 28329250,
          "BookieWinLose": 0,
          "Username": "bu100"
        },
        {
          "UserId": "661519098e1869352d67ce98",
          "WinLose": -83696000,
          "BookieWinLose": 0,
          "Username": "Ttk1111"
        }
      ],
      "TopLose": [
        {
          "UserId": "661519098e1869352d67ce98",
          "WinLose": -83696000,
          "BookieWinLose": 0,
          "Username": "Ttk1111"
        },
        {
          "UserId": "663f19a5c9053320265bb711",
          "WinLose": 28329250,
          "BookieWinLose": 0,
          "Username": "bu100"
        }
      ],
      "TopBet": [
        {
          "UserId": "663f19a5c9053320265bb711",
          "Amount": 216650750,
          "WinLose": 28329250,
          "Username": "bu100"
        },
        {
          "UserId": "661519098e1869352d67ce98",
          "Amount": 83696000,
          "WinLose": -83696000,
          "Username": "Ttk1111"
        }
      ]
    },
    "UserLevelStatusStats": [
      {
        "Level": 9,
        "Total": 6,
        "Suspended": 0,
        "Blocked": 2,
        "Active": 4
      }
    ]
  }';