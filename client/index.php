<?php
require_once __DIR__."/init.php";
?>
<!doctype html>
<html ng-app="fuse">
<head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta name="theme-color" content="#2b2e59" />
    <title><?= APP_NAME ?></title>
    <link rel="stylesheet" href="styles/vendor.css">
    <link rel="stylesheet" href="styles/PwT72nE5DYwEVYZ7.css">
    <link href='//fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700italic,700,900,900italic' rel='stylesheet' type='text/css'>
    <script src="https://resources.one789.info/nanoplayer.4.8.0.min.js"></script>
    <script src="https://resources.one789.info/h5live-player.bundle.js"></script>
    <script src="/lotus-player.bundle.js"></script>
    <?php if(0){ ?>
    <style>
        li.nav-link:nth-child(3){
            display: none !important;
        }
        li.nav-link:nth-child(4){
            display: none !important;
        }
        .group > ul:nth-child(2) > li:nth-child(3){
            display: none !important;
        }
        .group > ul:nth-child(2) > li:nth-child(4){
            display: none !important;
        }
        .group > ul:nth-child(2) > li:nth-child(5){
            display: none !important;
        }
    </style>
    <?php }?>
</head>
<!--[if lt IE 10]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
        your browser</a> to improve your experience.</p>
    <![endif]-->
<body md-theme="{{vm.themes.active.name}}" md-theme-watch ng-controller="IndexController as vm" class="{{state.current.bodyClass || ''}}">
    <ms-splash-screen id="splash-screen">
        <div class="center">
            <div class="logo">
                <span>
                    <img src="https://i.ibb.co/1MdnBSV/789.png" alt="one789">
                </span>
            </div>
            <div class="spinner-wrapper">
                <div class="spinner">
                    <div class="inner">
                        <div class="gap"></div>
                        <div class="left">
                            <div class="half-circle"></div>
                        </div>
                        <div class="right">
                            <div class="half-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ms-splash-screen>
    <div id="main" class="" ui-view="main" layout="column"></div>
    <div id="mask" style="height: 1659px;" ng-if="vm.showMark"></div>
    <div id="pngSwipeBackground" ng-class="{'pngFadeOutAnim': vm.hideSwipe, 'pngSwipeBgShow' : !vm.hideSwipe}">
        <div id="pngArrowDot"></div>
        <div id="pngSwipeHand"></div>
    </div>
    <ms-crucial-message ng-if="$root.crucialMessage">
        <div class="white-fg" flex>{{ $root.crucialMessage }}</div>
    </ms-crucial-message>
    <ms-ads class="animate-show" ng-show="$root.showAds"></ms-ads>
    <script>
        const _CONFIG_ = {
                Lottery: "<?= LOTTERY_BASE ?>",
                Identity: "<?= IDENTITY_BASE ?>",
                WMCasino: "https://wm.lotusapi.com",
                Communication: "<?= COMM_BASE ?>",
                Reporting: "<?= REPORT_BASE ?>",
                Lottery789: "<?= LOTTO789_BASE ?>",
                Saba: "https://sb.lotusapi.com",
                SenCasino: {
                    Base: "https://sen.lotusapi.com",
                    Games: {
                        Sedie: "https://sen-sedie.lotusapi.com",
                        Politics: "https://sen-politics.lotusapi.com",
                    },
                },
        };
    </script>
    <script src="scripts/vendor.js"></script>
    <script src="scripts/PwT72nE5DYwEVYZ7.js"></script>
    <script src="https://resources.one789.info/one/vi.js"></script>
</body>
</html>