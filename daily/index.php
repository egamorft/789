<?php
require_once __DIR__."/init.php";
?>
<!doctype html>
<html ng-app="fuse" lang="en-US">
<head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="description" content>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <title>AGENT <?= APP_NAME ?></title>
    <link rel="stylesheet" href="styles/vendor.css">
    <link rel="stylesheet" href="styles/Tr0t5AYo9aLVzdFHLNUd.css">
    <link href="//fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700italic,700,900,900italic" rel="stylesheet" type="text/css">
    <script src="https://one-client-resources.s3.ap-southeast-1.amazonaws.com/advanced-security-data.min.js"></script>
    <script src="https://resources.one789.info/nanoplayer.4.20.4.min.js"></script>
    <script src="https://resources.one789.info/h5live-player.bundle.js"></script>
    <script src="https://s3-ap-southeast-1.amazonaws.com/resources.one789.info/mc-speaker.bundle.js"></script>
    <script src="lotus-agent.bundle.js"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
    <script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
    <script src="https://resources.one789.info/lotus-dashboardchart.bundle.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js"></script>
    <?php if(0){ ?>
    <script type="text/javascript">
        window.heap = window.heap || [], heap.load = function(e, t) {
            window.heap.appid = e, window.heap.config = t = t || {};
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0, r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js";
            var a = document.getElementsByTagName("script")[0];
            a.parentNode.insertBefore(r, a);
            for (var n = function(e) {
                    return function() {
                        heap.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                    }
                }, p = ["addEventProperties", "addUserProperties", "clearEventProperties", "identify", "resetIdentity", "removeEventProperty", "setEventProperties", "track", "unsetEventProperty"], o = 0; o < p.length; o++) heap[p[o]] = n(p[o])
        };
        heap.load("3723190961");
    </script>
    <?php }?>
    <style>
        #vertical-navigation .navigation-header .logo .logo-image {
            background-image: url(/assets/images/logos/one.png);
            background-repeat: no-repeat;
            background-size: cover;
            display: block;
            width: 82px;
            min-width: 36px;
            height: 26px;
            line-height: 36px;
            text-align: center;
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            border-radius: 2px;
        }
    </style>
</head>
<!--[if lt IE 10]>
    <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
        your browser</a> to improve your experience.</p>
    <![endif]-->
<body md-theme="{{vm.themes.active.name}}" md-theme-watch ng-controller="IndexController as vm" class="{{state.current.bodyClass || ''}}" ng-cloak>
    <ms-splash-screen id="splash-screen">
        <div class="center">
            <div class="logo">
                <span>
                    <img src="assets/images/logos/one-splash.png">
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
    <div id="main" ui-view="main" layout="column"></div>
    <ms-ads class="animate-show" ng-show="$root.showAds"></ms-ads>
    <ms-info-bar ng-if="$root.infoBars.length && $mdMedia('max-width: 1364px')">
        <div class="notification">
            <p class="marquee">
                <span ng-repeat="item in $root.infoBars"><label>{{ item.PublishedAt | amDateFormat : 'DD/MM/YYYY HH:mm' }}</label>{{ item.Message | htmlToPlaintext }}</span>
            </p>
        </div>
    </ms-info-bar>
    <ms-crucial-message ng-if="$root.crucialMessage">
        <div class="white-fg" flex>{{ $root.crucialMessage }}</div>
    </ms-crucial-message>
    <ms-password-expired ng-if="$root.passwordExpired" ng-model="$root.passwordExpired"></ms-password-expired>
    <ms-dangerous-browser ng-if="$root.dangerousBrowser"></ms-dangerous-browser>
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
        const _CONFIG1_ = {
            Lottery: "https://lotto.lotusapi.com",
            Identity: "https://id.lotusapi.com",
            Common: "https://common.lotusapi.com",
            Chart: "https://analytics.lotusapi.com/chart",
            WMCasino: "https://wm.lotusapi.com",
            Reporting: "https://report.lotusapi.com",
            Logging: "https://log.lotusapi.com",
            Communication: "https://comm.lotusapi.com",
            Lottery789: "https://lotto789.lotusapi.com",
            TelegramChatApp: "https://common.lotusapi.com/telegram-agent",
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
    <script src="scripts/Tr0t5AYo9aLVzdFHLNUd.js"></script>
</body>
</html>