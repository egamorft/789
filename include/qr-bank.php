<!DOCTYPE html>
<html lang="en">
<head>
    <base href="https://pay.vnpay.vn">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <meta name="format-detection" content="telephone=no">
    <title>Quét mã qua ứng dụng Ngân hàng/ Ví điện tử</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/Styles/vendors/bootstrap/bootstrap.bundles.css">
    <link rel="stylesheet" href="/Styles/vendors/select2/select2.bundles.css">
    <link rel="stylesheet" href="/Styles/style.css">
    <link rel="stylesheet" href="<?= CLIENT_BASE ?>/Styles/custom.bundles.css">
    <link rel="shortcut icon" type="text/html" href="/images/favicon/favicon.png">
</head>
<body onunload="">
    <div class="loading">
        <div class="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    <div class="main main-layout-lg layout-bills">
        <div class="header-desktop show-desktop">
            <div class="row row-16 align-items-center justify-content-between">
                <div class="col-auto">
                </div>
                <div class="col-auto block-right">
                    <div class="title h4">
                        <a class="ubg-ghost ubox-size-button-sm ubg-hover ubg-active ubtn" hreff="#">
                            <div class="ubtn-inner">
                                <span class="ubtn-ic ubtn-ic-left">
                                    <img src="/images/img/flags/en.svg" alt="" class="ic-xl">
                                </span>
                                <span class="ubtn-text">En</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="main-wrap">
            <div class="main-inner main-inner-page">
                <div class="box box-main">
                    <div class="box__header header-box header-box-simple">
                        <div class="box__header-inner">
                            <div class="section">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-md-auto header-box-top">
                                        <div class="row align-items-center justify-content-md-center">
                                            <div class="col-auto show-mobile">
                                            </div>
                                            <div class="col-md-auto col">
                                                <div class="logo d-block text-center">
                                                    <img src="/Images/brands/logo.svg" alt="VNPAY">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md timer">
                                        <div class="timmer-inner">
                                            <div class="row row-12 align-items-center justify-content-md-end justify-content-between list-mb12 list-crop">
                                                <div class="col-md-auto col color-sub-default">
                                                    Giao dịch hết hạn sau
                                                </div>
                                                <div class="col-auto color-sub-default">
                                                    <div class="timer-clock fz-h3 weight5">
                                                        <div class="row row-4 align-items-center">
                                                            <div class="col-auto">
                                                                <div class="ubg-default ubox-size-ic-xs ubox-square ubox ubox-ic" id="minute">
                                                                    --
                                                                </div>
                                                            </div>
                                                            <div class="col-auto">:</div>
                                                            <div class="col-auto">
                                                                <div class="ubg-default ubox-size-ic-xs ubox-square ubox ubox-ic" id="second">
                                                                    --
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box__body ubg-white">
                        <div class="list-mb24">
                            <div class="layout-bills-inner box-section">
                                <div class="row list-mb24 list-crop">
                                    <div class="col-12 main-title-mobile show-mobile h3 text-center">
                                        Thanh to&#225;n qua ứng dụng Ng&#226;n h&#224;ng/ V&#237; điện tử
                                    </div>
                                    <div class="col-12 show-desktop">
                                        <div class="alert-box alert-box-warning ubg-sub-warning list-crop">
                                            <div class="alert-box-title">
                                                <div class="row row-8">
                                                    <div class="col-auto ic">
                                                        <img src="/images/icons-color/warning/default/24x24-alert.svg" alt="" class="ic-default">
                                                    </div>
                                                    <div class="col title weight5">
                                                        Qu&#253; kh&#225;ch vui l&#242;ng kh&#244;ng tắt tr&#236;nh duyệt cho đến khi nhận được kết quả giao dịch tr&#234;n website. Xin cảm ơn!
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 bills-col">
                                        <div class="bills">
                                            <div class="bills-header h2 show-desktop">
                                                Th&#244;ng tin đơn h&#224;ng
                                            </div>
                                            <div class="bills-header-mobile show-mobile list-mb12 list-last-mb" data-bs-toggle="collapse" data-bs-target="#accordionBill" aria-expanded="true" aria-controls="accordionBill">
                                                <div class="title weight5">
                                                    Thanh to&#225;n đơn h&#224;ng 14189955798629939213
                                                </div>
                                                <div class="row color-primary align-items-center">
                                                    <div class="col h2">
                                                        <span id="totalAmountMb"><?= $amount ?></span><sup>VND</sup>
                                                    </div>
                                                    <div class="col-auto">
                                                        <div class="ubg-transparent ubox-size-button-xs ubg-hover ubg-active ubtn">
                                                            <div class="ubtn-inner">
                                                                <span class="ubtn-text color-primary">
                                                                    Xem chi tiết
                                                                </span>
                                                                <span class="ubtn-ic ubtn-ic-right">
                                                                    <img src="/Images/icons-color/primary/default/24x24-chevrondown.svg" alt="" class="ic-default">
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="bills-body accordion-collapse collapse" id="accordionBill">
                                                <div>
                                                    <div class="bills-list list-mb24 list-last-mb">
                                                        <div class="bills-list-item show-desktop">
                                                            <div class="row">
                                                                <div class="col-md-12 col-5 mb4">
                                                                    <div class="sub-title color-sub-default">
                                                                        Số tiền thanh to&#225;n
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col">
                                                                    <div class="title text-left-md-right color-primary h2">
                                                                        <span id="totalAmountDt"><?= $amount ?></span><sup>VND</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="bills-list-item">
                                                            <div class="row">
                                                                <div class="col-md-12 col-5 mb4">
                                                                    <div class="sub-title color-sub-default">
                                                                        Gi&#225; trị đơn h&#224;ng
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col">
                                                                    <div class="title text-left-md-right h3">
                                                                        <?= $amount ?><sup>VND</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="bills-list-item">
                                                            <div class="row">
                                                                <div class="col-md-12 col-5 mb4">
                                                                    <div class="sub-title color-sub-default">
                                                                        Ph&#237; giao dịch
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col">
                                                                    <div class="title text-left-md-right h3">
                                                                        0<sup>VND</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="bills-list-item" id="discountAmountItem" style="display: none">
                                                            <div class="row">
                                                                <div class="col-md-12 col-5 mb4">
                                                                    <div class="sub-title color-sub-default">
                                                                        Số tiền khuyến mại
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col">
                                                                    <div class="title text-left-md-right h3">
                                                                        <span id="discountAmount">0</span><sup>VND</sup>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="bills-list-item show-desktop">
                                                            <div class="row">
                                                                <div class="col-md-12 col-5 mb4">
                                                                    <div class="sub-title color-sub-default">
                                                                        M&#227; đơn h&#224;ng
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col">
                                                                    <div class="title text-left-md-right h3">
                                                                        <?= $content ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="bills-list-item">
                                                            <div class="row">
                                                                <div class="col-md-12 col-5 mb4">
                                                                    <div class="sub-title color-sub-default">
                                                                        Nh&#224; cung cấp
                                                                    </div>
                                                                </div>
                                                                <div class="col-md-12 col">
                                                                    <div class="title text-left-md-right h3">
                                                                    <?= $name ?>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md right-bill-col">
                                        <div class="right-bill-col-inner">
                                            <div class="main-title h2 text-center show-desktop mb24">
                                                Qu&#233;t m&#227; qua ứng dụng Ng&#226;n h&#224;ng/ V&#237; điện tử
                                            </div>
                                            <div class="qr-section">
                                                <div class="qr-section-inner list-mb24 list-last-mb">
                                                    <a hreff="#" data-bs-toggle="modal" data-bs-target="#modalHuongDan@" class="link weight5 link-style-default show-desktop">
                                                        <img src="/images/icons-color/info/default/24x24-information-circle.svg" alt="" class='ic-default'>
                                                        Hướng dẫn thanh toán
                                                    </a>
                                                    <div class="qr qr-size-default" data-bs-toggle="modal" data-bs-target="#modalQR">
                                                        <div class="qr-inner" style="background-image: url('../../../../images/img/mics/qr-frame.svg')">
                                                            <img class="qrcodeimg-modal" src="<?= $qr ?>" alt="QR CODE">
                                                        </div>
                                                    </div>
                                                    <div class="section d-flex justify-content-center align-items-center w-100 show-mobile">
                                                        <a href="/Transaction/DownloadQR.html" class="link weight5 link-style-default">
                                                            <img src="/images/icons-color/info/default/24x24-download.svg" alt="" class='ic-default'>

                                                            Tải m&#227;
                                                        </a>
                                                        <a data-bs-toggle="modal" data-bs-target="#modalHuongDanMobile@" class="link link-underline weight5" style="margin-left:15px;">
                                                            <img src="/images/icons-color/info/default/24x24-question-circle.svg" alt="" class="ic-md">
                                                            Hướng dẫn
                                                        </a>
                                                    </div>
                                                    <div class="list-bank-mobile w-100 show-mobile">
                                                        <div class="list-mb16 list-last-mb">
                                                            <div class="p weight5">
                                                                Sử dụng
                                                                <a data-bs-toggle="modal" data-bs-target="#modalDanhSachUngDung" class="link link-underline weight5"> Ứng dụng hỗ trợ
                                                                </a>
                                                                để quét mã hoặc
                                                                <b> nhấn vào logo
                                                                </b>
                                                                để thanh toán trực tiếp trên ứng dụng
                                                            </div>
                                                            <div class="list-bank list-bank-grid-4">
                                                                <div class="list-mb24 list-last-mb">
                                                                    <div class="list-bank-main">
                                                                        <div class="row row-8 list-mb8 list-crop">


                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietcombank.svg)" onclick="return open_vnpayqr('VIETCOMBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/vietcombank/id561433133?mt=8', 'VCB Mobile-B@anking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/agribank.svg)" onclick="return open_vnpayqr('AGRIBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/agribank-e-mobile-banking/id935944952?mt=8', 'Agribank E-Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/bidv.svg)" onclick="return open_vnpayqr('BIDV', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/bidv-smart-banking/id1061867449?mt=8', 'BIDV Smart Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietinbank.svg)" onclick="return open_vnpayqr('VIETINBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/vietinbank-ipay/id689963454?mt=8', 'VietinBank IPay');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vnpayewallet.svg)" onclick="return open_vnpayqr('VNPAYEWALLET', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/us/app/v%C3%AD-vnpay/id1470378562', 'VNPAY E-wallet');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/scb.svg)" onclick="return open_vnpayqr('SCB', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/scb-mobile-banking/id954973621?mt=8', 'SCB Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/abbank.svg)" onclick="return open_vnpayqr('ABBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/abbankmobile/id1137160023?mt=8', 'ABBANK Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ivb.svg)" onclick="return open_vnpayqr('IVB', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/ivb-mobile/id1096963960?mt=8', 'IVB Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietbank.svg)" onclick="return open_vnpayqr('VIETBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/id1469883896?ls=1&amp;mt=8', 'Vietbank Digital');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/eximbankomni.svg)" onclick="return open_vnpayqr('EXIMBANKOMNI', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/eximbank-edigi/id1571427361', 'Eximbank Edigi');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ojb.svg)" onclick="return open_vnpayqr('OJB', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/oceanbank/id1469028843', 'OceanBank Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/baovietbank.svg)" onclick="return open_vnpayqr('BAOVIETBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/tt/app/baoviet-smart/id1504422967?ign-mpt=uo%3D2', 'BAOVIET Smart');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/hdbank.svg)" onclick="return open_vnpayqr('HDBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/hdbank/id1461658565', 'HDBank Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/saigonbank.svg)" onclick="return open_vnpayqr('SAIGONBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/saigonbank-smart-banking/id1481832587', 'SAIGONBANK SmartBanking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/bidc.svg)" onclick="return open_vnpayqr('BIDC', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/hu/app/bidc-mobile-banking-viet-nam/id1043501726', 'BIDC Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietabank.svg)" onclick="return open_vnpayqr('VIETABANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/us/app/vietabank/id910897337?l=vi&amp;ls=1', 'VietABank Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/shb.svg)" onclick="return open_vnpayqr('SHB', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/shb-mobile/id538278798?mt=8', 'SHB Mobile Banking');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/shinhanbank.svg)" onclick="return open_vnpayqr('SHINHANBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/app/id1071033810', 'Shinhan Bank Vietnam SOL');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/coopbank.svg)" onclick="return open_vnpayqr('COOPBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/co-opbank-mobile-banking/id1578445811?l=vi', 'CoopBank');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vbsp.svg)" onclick="return open_vnpayqr('VBSP', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/nl/app/vbsp-smartbanking/id1606153938', 'VBSP');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vidbank.svg)" onclick="return open_vnpayqr('VIDBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/us/app/id1573736472', 'PB engage VN');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/viettelpay.svg)" onclick="return open_vnpayqr('VIETTELPAY', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/viettel-money/id1344204781', 'Viettel Money');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vnptpay.svg)" onclick="return open_vnpayqr('VNPTPAY', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://itunes.apple.com/vn/app/vnpt-pay/id1294940479?mt=8', 'VNPTPAY E-wallet');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/viting.svg)" onclick="return open_vnpayqr('VITING', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/app/v%C3%AD-ting-qu%E1%BA%A3n-l%C3%BD-ti%E1%BB%81n-hi%E1%BB%87u-qu%E1%BA%A3/id1534262919', 'TING');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vtcpay.svg)" onclick="return open_vnpayqr('VTCPAY', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/vtc365/id404108605?l=vi', 'VTC Pay');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/payme.svg)" onclick="return open_vnpayqr('PAYME', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/v%C3%AD-payme/id1492981630', 'V&#237; PayME');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/appotapay.svg)" onclick="return open_vnpayqr('APPOTAPAY', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/v%C3%AD-appota-gi%E1%BA%A3i-tr%C3%AD-t%C3%ADch-%C4%91i%E1%BB%83m/id1198481412', 'Appota');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/9pay.svg)" onclick="return open_vnpayqr('9PAY', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/v%C3%AD-%C4%91i%E1%BB%87n-t%E1%BB%AD-9pay/id1484320059', '9PAY');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/cbbank.svg)" onclick="return open_vnpayqr('CBBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/cbway/id1531443181', 'CBway');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/pgbank.svg)" onclick="return open_vnpayqr('PGBANK', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/th/app/pg-bank-flexi-app/id1537765475', 'PGB Bank App');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-item col-sm-3 col-4">
                                                                                <div class="list-bank-item">
                                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietcredit.svg)" onclick="return open_vnpayqr('VIETCREDIT', '00020101021226280010A0000007750110010395991252046540530370454062000005802VN5903VED6005HANOI610610000062700308NAPTHEVN05210124040116441903468140708AIRPAY010817Thanh%20toan%20QRCode63048941&amp;callbackurl=https%3a%2f%2fpay.vnpay.vn%2fqrback.html%3ftoken%3d512f317ef41b4921906c3c786bc1519a', 'https://apps.apple.com/vn/app/id6446801016', 'TIN Card');"></div>
                                                                                </div>
                                                                            </div>
                                                                            <script src="/Scripts/ua-parser.min.js" type="text/javascript"></script>
                                                                            <script type="text/javascript">
                                                                                function open_vnpayqr(bank_code, qrContent) {
                                                                                    //Display Errror
                                                                                    $("#messageNotify").html("Quý khách vui lòng tải/ chụp ảnh mã QR và quét mã QR để thanh toán tại ứng dụng Mobile Banking/ Ví điện tử");
                                                                                    $('#modalNotifySupportQR').modal("show");
                                                                                    return false;
                                                                                }
                                                                            </script>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="qr-cancel-btn-wrap">
                                                        <!-- button.button -->
                                                        <a data-bs-toggle="modal" data-bs-target="#modalCancelPayment" class="ubg-secondary ubox-size-button-default ubg-hover ubg-active ubtn">
                                                            <div class="ubtn-inner">
                                                                <span class="ubtn-text">
                                                                    Hủy thanh to&#225;n

                                                                </span>
                                                            </div>
                                                        </a>
                                                        <!-- end button.button -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-section show-desktop">
                                <div class="list-bank-promo">
                                    <div class="list-mb24 list-last-mb">
                                        <div class="list-bank-promo-section list-mb16">
                                            <div class="weight5">
                                                Danh sách Ngân hàng/ Ví điện tử có áp dụng khuyến mãi

                                            </div>
                                            <div class="list-bank list-bank-grid-8">
                                                <div class="list-mb24 list-last-mb">
                                                    <div class="list-bank-main list-bank-main-unclickable">
                                                        <div class="row row-8 list-mb8 list-crop">
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietcombank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/bidv.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietinbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/agribank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vnpayewallet.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/abbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/baovietbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/hdbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <!--<div class="col-item col-4 col-md-auto">
                        <div class="list-bank-item">
                            <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/namabank.svg)"></div>
                        </div>
                    </div>-->
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ojb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/scb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/bidc.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietabank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/eximbankomni.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/coopbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/publicbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/saigonbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vbsp.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/viettelpay.svg)"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="list-bank-promo-section list-mb16">
                                            <div class="weight5">

                                                Danh sách Ngân hàng/ Ví điện tử khác hỗ trợ thanh toán <span class="vnpay-logo b"> <span class="vnpay-red">VN</span><span class="vnpay-blue">PAY</span> <sup class="vnpay-red">QR</sup> </span>
                                            </div>
                                            <div class="list-bank list-bank-grid-8">
                                                <div class="list-mb24 list-last-mb">
                                                    <div class="list-bank-main list-bank-main-unclickable">
                                                        <div class="row row-8 list-mb8 list-crop">
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/techcombank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/mbbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vpbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vib.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/sacombank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/tpbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/msbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/acb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/shb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ocb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ncb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietcapitalbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/bacabank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/pvcombank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/wooribank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/lienvietbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ivb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/cbbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/pgbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/seabank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/shinhanbank.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/cakepay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/timobvb.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vinid.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/truemoney.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/foxpay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vimass.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vtcpay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/baokim.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/payme.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/viting.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vnptpay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/appotapay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/9pay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/mobifonepay.svg)"></div>
                                                                </div>
                                                            </div>
                                                            <div class="col-item col-4 col-md-auto">
                                                                <div class="list-bank-item">
                                                                    <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/vietcredit.svg)"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- _custom.footerBox -->
                    <div class="box__footer footer-box">
                        <div class="box__footer-inner">
                            <div class="section">
                                <div class="row row-32 list-mb24 list-crop align-items-center justify-content-center">
                                    <div class="col fz-h5 show-mobile">
                                        Phát triển bởi VNPAY &copy; 2023
                                    </div>
                                    <div class="col-sm show-desktop">
                                        <div class="row row-32 align-items-center">
                                            <div class="col-auto">
                                                <!-- button.button -->
                                                <a href="tel:1900555577" class="ubg-ghost ubox-size-button-default ubg-hover ubg-active ubtn">
                                                    <div class="ubtn-inner">
                                                        <div class="ubg-line-porcelain-dark ubox-size-ic-md ubox-square ubox ubox-ic">
                                                            <img src="/images/icons-color/default2/default/24x24-phone.svg" alt="" class='ic-default'>
                                                        </div>
                                                        <span class="ubtn-text h3 color-info u pl12">1900.5555.77</span>
                                                    </div>
                                                </a>
                                                <!-- end button.button -->
                                            </div>
                                            <div class="col-auto">
                                                <!-- button.button -->
                                                <a href="mailto:hotrovnpay@vnpay.vn" class="ubg-ghost ubox-size-button-default ubg-hover ubg-active ubtn">
                                                    <div class="ubtn-inner">
                                                        <div class="ubg-line-porcelain-dark ubox-size-ic-md ubox-square ubox ubox-ic">
                                                            <img src="/images/icons-color/default2/default/24x24-email.svg" alt="" class='ic-default'>
                                                        </div>
                                                        <span class="ubtn-text h3 color-info u pl12">hotrovnpay@vnpay.vn</span>
                                                    </div>
                                                </a>
                                                <!-- end button.button -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-auto">
                                        <div class="row row-8 justify-content-center">
                                            <div class="col-auto">
                                                <a href="https://profile.globalsign.com/SiteSeal/siteSeal/profile/profile.do?p1=e797f6ab&p2=a06dada7520ada559537452c666a510c95706240fc2dfde64d4c864bf735462b7a370908847a6060a26daeac4f549d0bc8&p3=7b58e9c169b0b0ff3eb932a37330cc91d466b871" target="_blank" class="footer-logos">
                                                    <img src="/images/img/logos/global-sign.svg" height="40">
                                                </a>
                                            </div>
                                            <div class="col-auto">
                                                <a href="https://seal.controlcase.com/index.php?page=showCert&cId=3865876849" target="_blank" class="footer-logos">
                                                    <img src="/images/img/logos/pcidss.svg" height="40">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalQR" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-size-default modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-wrap">
                            <div class="row row-16 modal-title-wrap">
                                <div class="col-12 text-center">
                                    <h2 class="modal-title h2">
                                        Qu&#233;t m&#227; thanh to&#225;n

                                    </h2>
                                </div>
                            </div>
                            <a data-bs-dismiss="modal" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn modal-close-btn">
                                <div class="ubtn-inner">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="list-mb24 list-crop text-center row justify-content-center">
                            <div class="col-12">
                                <div class="qr qr-size-lg">
                                    <div class="qr-inner" style="background-image: url('../../../../images/img/mics/qr-frame.svg')">
                                        <img class="qrcodeimg-modal" src="<?=  $qr ?>" alt="QR CODE">
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="bills bills-simple">
                                    <div class="text-center">
                                        <div class="sub-title weight5 mb4">
                                            Số tiền thanh to&#225;n
                                        </div>
                                        <div class="title color-primary h2">
                                            <?= $amount ?><sup>VND</sup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-auto show-desktop">
                                <a href="#" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#modalHuongDan" class="link weight5 link-style-default">
                                    <img src="/images/icons-color/info/default/24x24-information-circle.svg" alt="" class='ic-default'>
                                    Hướng dẫn thanh toán
                                </a>
                            </div>
                            <div class="col-12 show-mobile">
                                <a href="/Transaction/DownloadQR.html" class="ubg-sub-primary ubox-size-button-default ubg-hover ubg-active ubtn">
                                    <div class="ubtn-inner">
                                        <span class="ubtn-ic ubtn-ic-left">
                                            <img src="/images/icons-color/primary/default/24x24-download.svg" alt="" class="ic-default">
                                        </span>
                                        <span class="ubtn-text">Tải m&#227;</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalHuongDan" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-size-md modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-wrap">
                            <div class="row row-16 modal-title-wrap show-mobile">
                                <div class="col-12 text-center">
                                    <h2 class="modal-title h2">
                                        Danh s&#225;ch ứng dụng hỗ trợ

                                    </h2>
                                </div>
                            </div>
                            <a data-bs-dismiss="modal" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn modal-close-btn">
                                <div class="ubtn-inner">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="modal-section show-desktop">
                            <div class="guide">
                                <div class="guide-inner">
                                    <div class="row row-52">
                                        <div class="col-auto">
                                            <div class="tab-content">
                                                <div class="tab-pane fade show active tabGuide1">
                                                    <div class="guide-image">
                                                        <img src="/images/img/guide/hd-1.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade tabGuide2">
                                                    <div class="guide-image">
                                                        <img src="/images/img/guide/hd-2.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade tabGuide3">
                                                    <div class="guide-image">
                                                        <img src="/images/img/guide/hd-3.png" alt="">
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div class="col">
                                            <div class="h2 mb32">Hướng dẫn thanh toán</div>
                                            <div class="nav-wrap">
                                                <nav class="nav nav-style-guide tabs-vertical tabs-progress nav-full">
                                                    <a class="nav-link active" data-bs-toggle="tab" data-bs-target=".tabGuide1">
                                                        <div class="guide-content color-default">
                                                            <div class="row row-16">
                                                                <div class="col-auto">
                                                                    <div class="guide-title-number">
                                                                        <div class="guide-title-number-inner h3">1</div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="guide-title h3 mb2">
                                                                        <div class="guide-title-inner">
                                                                            Qu&#233;t m&#227; QR

                                                                        </div>
                                                                    </div>
                                                                    <div class="guide-sub-title">
                                                                        Đăng nhập ứng dụng thanh toán, chọn chức năng QRPay và quét mã QR
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target=".tabGuide2">
                                                        <div class="guide-content color-default">
                                                            <div class="row row-16">
                                                                <div class="col-auto">
                                                                    <div class="guide-title-number">
                                                                        <div class="guide-title-number-inner h3">2</div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="guide-title h3 mb2">
                                                                        <div class="guide-title-inner">
                                                                            Kiểm tra đơn h&#224;ng

                                                                        </div>
                                                                    </div>
                                                                    <div class="guide-sub-title">
                                                                        Kiểm tra thông tin đơn hàng và lựa chọn tài khoản thanh toán để tiếp tục
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a class="nav-link" data-bs-toggle="tab" data-bs-target=".tabGuide3">
                                                        <div class="guide-content color-default">
                                                            <div class="row row-16">
                                                                <div class="col-auto">
                                                                    <div class="guide-title-number">
                                                                        <div class="guide-title-number-inner h3">3</div>
                                                                    </div>
                                                                </div>
                                                                <div class="col">
                                                                    <div class="guide-title h3 mb2">
                                                                        <div class="guide-title-inner">
                                                                            X&#225;c nhận giao dịch

                                                                        </div>
                                                                    </div>
                                                                    <div class="guide-sub-title">
                                                                        Xác nhận thanh toán và hoàn tất giao dịch
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </nav>
                                            </div>
                                            <!-- end tab.tab -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-section">
                            <div class="list-mb24 list-last-mb">
                                <div class="row">
                                    <div class="col-md-8 show-desktop">
                                        <div class="h2">
                                            Danh s&#225;ch ứng dụng hỗ trợ

                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <!-- form.input -->
                                        <div class="form-group">
                                            <div class="input-group-wrap input-default input-size-default input-group-vertical">
                                                <label class="input-inner-wrap">
                                                    <input type="text" class="input input-label-change input-has-clear" placeholder="T&#236;m kiếm..." autocorrect="off" id="searchAppSupportQR">
                                                    <div class="input-extend input-extend-left">
                                                        <div class="input-box input-ic">
                                                            <img src="/images/icons-color/default2/default/24x24-search.svg" alt="" class="ic-default">
                                                        </div>
                                                    </div>
                                                    <div class="input-extend input-extend-right">
                                                        <div class="input-box input-ic-clear"></div>
                                                    </div>
                                                    <div class="input-frame"></div>
                                                </label>
                                            </div>
                                            <div class="errorBlock"></div>
                                        </div>
                                        <!-- end form.input -->
                                    </div>
                                </div>
                                <div class="app-list">
                                    <div class="row list-mb16 list-crop row-16">
                                        <div class="col-md-6 list-app-qr" search-value="vcb mobile-b@anking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETCOMBANK.png" alt="VCB Mobile-B@anking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VCB Mobile-B@anking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 3.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="agribank e-mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/AGRIBANK.png" alt="Agribank E-Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Agribank E-Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.2.12</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.12</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="bidv smart banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/BIDV.png" alt="BIDV Smart Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    BIDV Smart Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.1.5</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.5.2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vietinbank ipay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETINBANK.png" alt="VietinBank IPay">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VietinBank IPay
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 4.0.4</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 4.0.4</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vnpay e-wallet">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VNPAYEWALLET.png" alt="VNPAY E-wallet">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VNPAY E-wallet
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.1</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.1</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vpbank neo">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VPBANK.png" alt="VPBANK NEO">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VPBANK NEO
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.0.4</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.10.13</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="scb mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/SCB.png" alt="SCB Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    SCB Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.0.1</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 3.0.1</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="abbank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/ABBANK.png" alt="ABBANK Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    ABBANK Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.0.2</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="seabank smartbanking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/SEABANK.png" alt="Seabank SmartBanking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Seabank SmartBanking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.11.15</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.10.36</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="ivb mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/IVB.png" alt="IVB Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    IVB Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="ncb smart banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/NCB.png" alt="NCB Smart Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    NCB Smart Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 4.1.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 4.1.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vietbank digital">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETBANK.png" alt="Vietbank Digital">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vietbank Digital
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.5</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.7</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="eximbank edigi">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/EXIMBANKOMNI.png" alt="Eximbank Edigi">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Eximbank Edigi
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="oceanbank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/OJB.png" alt="OceanBank Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    OceanBank Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.3</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="baoviet smart">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/BAOVIETBANK.png" alt="BAOVIET Smart">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    BAOVIET Smart
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.6</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.1</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="hdbank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/HDBANK.png" alt="HDBank Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    HDBank Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.8</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.4</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="saigonbank smartbanking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/SAIGONBANK.png" alt="SAIGONBANK SmartBanking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    SAIGONBANK SmartBanking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="bidc mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/BIDC.png" alt="BIDC Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    BIDC Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.1.1</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.7</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vietabank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETABANK.png" alt="VietABank Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VietABank Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.0.9</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 3.0-11</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="msb mbank">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/MSBANK.png" alt="MSB mBank">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    MSB mBank
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 4.0.8</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 4.2.2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="shb mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/SHB.png" alt="SHB Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    SHB Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.0.7</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 3.0.7</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vib mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIB.png" alt="VIB Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VIB Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 8.1.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 8.1.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="tpbank quickpay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/TPBANK.png" alt="TPBANK QuickPay">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    TPBANK QuickPay
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="mbbank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/MBBANK.png" alt="MBBANK Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    MBBANK Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.6</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.6</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="bacabank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/BACABANK.png" alt="BacABank Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    BacABank Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.4</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.0.4</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="acb mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/ACB.png" alt="ACB Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    ACB Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.4.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.4.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="ocb mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/OCB.png" alt="OCB Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    OCB Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 10.01.2019</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 10.01.2019</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="wooribank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/WOORIBANK.png" alt="WOORIBANK Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    WOORIBANK Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.5.3</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.4.25</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="pvcombank mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/PVCOMBANK.png" alt="PVCOMBANK Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    PVCOMBANK Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.5</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.5</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vietcapital mobile banking">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETCAPITALBANK.png" alt="VietCapital Mobile Banking">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VietCapital Mobile Banking
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.40</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.94</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="sacombank pay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/SACOMBANK.png" alt="Sacombank PAY">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Sacombank PAY
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.1.1</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.1.1</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="shinhan bank vietnam sol">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/SHINHANBANK.png" alt="Shinhan Bank Vietnam SOL">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Shinhan Bank Vietnam SOL
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.2.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.2.4</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="coopbank">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/COOPBANK.png" alt="CoopBank">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    CoopBank
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="techcombank mobile">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/TECHCOMBANK.png" alt="TECHCOMBANK MOBILE">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    TECHCOMBANK MOBILE
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.2.8</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.2.11</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vbsp">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VBSP.png" alt="VBSP">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VBSP
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="pb engage vn">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIDBANK.png" alt="PB engage VN">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    PB engage VN
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.2</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="viettel money">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETTELPAY.png" alt="Viettel Money">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Viettel Money
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 5.3.1</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 5.3.1</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vnptpay e-wallet">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VNPTPAY.png" alt="VNPTPAY E-wallet">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VNPTPAY E-wallet
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.5.6</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vi dien tu vinid">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VINID.png" alt="Vi dien tu VINID">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vi dien tu VINID
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 17.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 17.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vimass e-wallet">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIMASS.png" alt="VIMASS E-wallet">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VIMASS E-wallet
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 4.0.5</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.0.14</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="ting">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VITING.png" alt="TING">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    TING
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 0.0.68</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 0.0.68</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="truemoney e-wallet">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/1PAY.png" alt="TrueMoney E-wallet">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    TrueMoney E-wallet
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.4.2</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 3.4.2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="v&#237; việt">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIVIET.png" alt="V&#237; Việt">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    V&#237; Việt
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.7.7</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.7.7</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vtc pay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VTCPAY.png" alt="VTC Pay">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    VTC Pay
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 9.22.29</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 4.3.56</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="v&#237; payme">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/PAYME.png" alt="V&#237; PayME">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    V&#237; PayME
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.6.12</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.6.12</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vi dien tu baokim">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/BAOKIM.png" alt="Vi dien tu BAOKIM">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vi dien tu BAOKIM
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.3.2</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.3.2</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vi dien tu galaxypay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/GALAXYPAY.png" alt="Vi dien tu GalaxyPay">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vi dien tu GalaxyPay
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="appota">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/APPOTAPAY.png" alt="Appota">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Appota
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 4.9.13</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 4.9.13</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="9pay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/9PAY.png" alt="9PAY">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    9PAY
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 3.5.0+368</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 3.5.0+368</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vi dien tu mobifone money">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/MOBIFONEPAY.png" alt="Vi dien tu Mobifone Money">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vi dien tu Mobifone Money
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.07</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.07</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vi dien tu cakepay">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/CAKEPAY.png" alt="Vi dien tu CAKEPAY">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vi dien tu CAKEPAY
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.2.63</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.1.51</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="vi dien tu timo">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/TIMOBVB.png" alt="Vi dien tu TIMO">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    Vi dien tu TIMO
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.0</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="cbway">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/CBBANK.png" alt="CBway">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    CBway
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.0.3</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.0.3</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="pgb bank app">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/PGBANK.png" alt="PGB Bank App">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    PGB Bank App
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 2.8.5</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 2.8.5</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 list-app-qr" search-value="tin card">
                                            <div class="app-list-item">
                                                <div class="app-list-item-inner">
                                                    <div class="row row-12">
                                                        <div class="col-auto">
                                                            <div class="icon">
                                                                <img src="/images/img/logos/app/VIETCREDIT.png" alt="TIN Card">
                                                            </div>
                                                        </div>
                                                        <div class="col content">
                                                            <div class="list-mb8 list-last-mb">
                                                                <div class="title weight5">
                                                                    TIN Card
                                                                </div>
                                                                <div class="app-os fz-h5">
                                                                    <div class="row row-16">
                                                                        <div class="col">
                                                                            <div class="app-os-item ios">
                                                                                <div class="app-os-title">iOS: 1.0.8</div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="col">
                                                                            <div class="app-os-item android">
                                                                                <div class="app-os-title">Android: 1.0.7</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade modal-full-height" id="modalHuongDanMobile" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-size-md modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-wrap">
                            <div class="row row-16 modal-title-wrap">
                                <div class="col-12 text-center">
                                    <h2 class="modal-title h2">
                                        Hướng dẫn thanh to&#225;n

                                    </h2>
                                </div>
                            </div>
                            <a data-bs-dismiss="modal" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn modal-close-btn">
                                <div class="ubtn-inner">
                                </div>
                            </a>
                            <div class="mt16">
                                <div class="nav-wrap">
                                    <nav class="nav nav-style-pills nav-fill">
                                        <a class="nav-link active" data-bs-toggle="tab" data-bs-target=".tabGuideMobile1">
                                            Qua quét mã VNPAY<sup>QR</sup>
                                        </a>
                                        <a class="nav-link" data-bs-toggle="tab" data-bs-target=".tabGuideMobile2">
                                            Qua ứng dụng hỗ trợ VNPAY
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="tab-content">
                            <div class="tab-pane fade show active tabGuideMobile1">
                                <div class="list-mb24 list-last-mb">
                                    <p><b>Bước 1:</b> Tải mã/ chụp lại mã thanh toán</p>
                                    <p><b>Bước 2:</b> Đăng nhập ứng dụng hỗ trợ thanh toán, chọn chức năng QRPay</p>
                                    <p><b>Bước 3:</b> Tại màn hình quét QR, chọn chức năng "Thư viện ảnh"</p>
                                    <p><b>Bước 4:</b> Chọn ảnh QR đã tải về trong thư viện</p>
                                    <p><b>Bước 5:</b> Kiểm tra thông tin đơn hàng và lựa chọn tài khoản thanh toán </p>
                                    <p><b>Bước 6:</b> Xác nhận thanh toán và hoàn tất giao dịch</p>
                                    <p><em><u>Lưu ý:</u> Ngoài tải mã thanh toán Khách hàng có thể sử dụng thiết bị khác (nếu có) để quét mã hiển thị trên màn hình mà không phải tải mã.</em></p>
                                </div>
                            </div>
                            <div class="tab-pane fade tabGuideMobile2">
                                <div class="list-mb24 list-last-mb">
                                    <ul class="ul weight5 list-mb12 list-last-mb">
                                        <li>
                                            <span class="color-primary">Bước 1</span>:
                                            Nhấn vào logo của ứng dụng hỗ trợ thanh toán QR trong danh sách
                                        </li>
                                        <li>
                                            <span class="color-primary">Bước 2</span>:
                                            Đồng ý mở ứng dụng hỗ trợ thanh toán QR theo yêu câu thông báo trên màn hình và Đăng nhập
                                        </li>
                                        <li>
                                            <span class="color-primary">Bước 3</span>:
                                            Xác nhận giao dịch và hoàn tất thanh toán
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="modalDanhSachUngDung" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-size-md modal-dialog-scrollable" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="modal-wrap">
                            <div class="row row-16 modal-title-wrap">
                                <div class="col-12 text-center">
                                    <h2 class="modal-title h2">
                                        Danh s&#225;ch Ng&#226;n h&#224;ng hỗ trợ

                                    </h2>
                                </div>
                            </div>
                            <a data-bs-dismiss="modal" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn modal-close-btn">
                                <div class="ubtn-inner">
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="list-bank list-bank-grid-4">
                            <div class="list-mb24 list-last-mb">
                                <div class="list-bank-main list-bank-main-unclickable">
                                    <div class="row row-8 list-mb8 list-crop">
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETCOMBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/AGRIBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/BIDV.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETINBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VNPAYEWALLET.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VPBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/SCB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ABBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/SEABANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/IVB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/NCB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/EXIMBANKOMNI.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/OJB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/BAOVIETBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/HDBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/SAIGONBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/BIDC.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETABANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/MSBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/SHB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/TPBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/MBBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/BACABANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/ACB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/OCB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/WOORIBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/PVCOMBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETCAPITALBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/SACOMBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/SHINHANBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/COOPBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/TECHCOMBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VBSP.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIDBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETTELPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VNPTPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VINID.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIMASS.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VITING.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/1PAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIVIET.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VTCPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/PAYME.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/BAOKIM.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/GALAXYPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/APPOTAPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/9PAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/MOBIFONEPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/CAKEPAY.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/TIMOBVB.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/CBBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/PGBANK.svg)"></div>
                                            </div>
                                        </div>
                                        <div class="col-item col-4 col-md-auto">
                                            <div class="list-bank-item">
                                                <div class="list-bank-item-inner" style="background-image: url(/images/img/logos/bank/big/VIETCREDIT.svg)"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="footer main-footer show-desktop">
            <div class="footer-inner text-center">
                Phát triển bởi VNPAY &copy; 2023
            </div>
        </footer>
    </div>
    <?php if(0){ ?>
    <div class="chat-box show-desktop">
        <div class="chat-box-icon">
            <a href="https://zalo.me/4134983655549474109" target="_blank">
                <img src="/images/img/logos/zalo.svg" alt="">
            </a>
        </div>
    </div>
    <?php }?>
    <div class="footer_mobile show-mobile">
        <div class="footer_mobile-inner">
            <div class="row row-32 align-items-center">
                <div class="col">
                    <div class="inline-block">
                        <a class="ubg-ghost ubox-size-button-sm ubg-hover ubg-active ubtn" hreff="">
                            <div class="ubtn-inner">
                                <span class="ubtn-ic ubtn-ic-left">
                                    <img src="/images/img/flags/en.svg" alt="" class="ic-xl">
                                </span>
                                <span class="ubtn-text">En</span>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="row row-0">
                        <div class="col-auto">
                            <a href="https://zalo.me/4134983655549474109" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn">
                                <div class="ubtn-inner">
                                    <span class="ubtn-ic ubtn-ic-left">
                                        <img src="/images/img/logos/zalo.svg" alt="" class="ic-default">
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="col-auto">
                            <a href="tel:1900555577" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn">
                                <div class="ubtn-inner">
                                    <span class="ubtn-ic ubtn-ic-left">
                                        <img src="/images/icons-color/default/default/24x24-phone.svg" alt="" class="ic-default">
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div class="col-auto">
                            <a href="mailto:hotro@vnpay.vn" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn">
                                <div class="ubtn-inner">
                                    <span class="ubtn-ic ubtn-ic-left">
                                        <img src="/images/icons-color/default/default/24x24-email.svg" alt="" class="ic-default">
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade text-center" id="modalCancelPayment" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-size-alert-default modal-dialog-scrollable modal-alert" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-wrap">
                        <div class="row row-16 modal-title-wrap">
                            <div class="col-12 text-center">
                                <h2 class="modal-title h2">
                                    Hủy thanh to&#225;n
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-body color-sub-default fz-h3">
                    Qu&#253; kh&#225;ch c&#243; chắc chắn muốn hủy thanh to&#225;n giao dịch n&#224;y?
                </div>
                <div class="modal-footer justify-content-center">
                    <div class="ubtn-group list-mb16 list-crop row row-16 justify-content-center group-col-md-3 group-col-fill">
                        <div class="group-col-item">
                            <a data-bs-dismiss="modal" class="ubg-secondary ubox-size-button-default ubg-hover ubg-active ubtn">
                                <div class="ubtn-inner">
                                    <span class="ubtn-text">Đ&#243;ng</span>
                                </div>
                            </a>
                        </div>
                        <div class="group-col-item">
                            <a data-bs-dismiss="modal" href="#" class="ubg-danger ubox-size-button-default ubg-hover ubg-active ubtn" onclick="cancelConfirm()">
                                <div class="ubtn-inner">
                                    <span class="ubtn-text">X&#225;c nhận hủy</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade text-center" id="modalNotifySupportQR" role="dialog" aria-labelledby="modalNotifySupportQR" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-size-alert-default modal-dialog-scrollable modal-alert" role="document">
            <div class="modal-content">
                <div class="modal-body color-sub-default fz-h3" id="messageNotify">
                    Qu&#253; kh&#225;ch c&#243; chắc chắn muốn hủy thanh to&#225;n giao dịch n&#224;y?
                </div>
                <div class="modal-footer justify-content-center">
                    <div class="ubtn-group list-mb16 list-crop row row-16 justify-content-center group-col-md-3 group-col-fill">
                        <div class="group-col-item">
                            <a data-bs-dismiss="modal" class="ubg-secondary ubox-size-button-default ubg-hover ubg-active ubtn">
                                <div class="ubtn-inner">
                                    <span class="ubtn-text">Đ&#243;ng</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade text-center" id="modalNotifyOpenNewTab" role="dialog" aria-labelledby="modalNotifyOpenNewTab" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-size-alert-default modal-dialog-scrollable modal-alert" role="document">
            <div class="modal-content">
                <div class="modal-body color-sub-default fz-h3">
                    txt_open_multiple_tab
                </div>
                <div class="modal-footer justify-content-center">
                    <div class="ubtn-group list-mb16 list-crop row row-16 justify-content-center group-col-md-3 group-col-fill">
                        <div class="group-col-item">
                            <a href="#" class="ubg-secondary ubox-size-button-default ubg-hover ubg-active ubtn" onclick="cancelConfirm()">
                                <div class="ubtn-inner">
                                    <span class="ubtn-text">Đ&#243;ng</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="modalDKSD" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-size-sm modal-dialog-scrollable" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <div class="modal-wrap">
                        <div class="row row-16 modal-title-wrap">
                            <div class="col-12 text-center">
                                <h2 class="modal-title h2">
                                    <div class="h3">Điều khoản sử dụng</div>
                                </h2>
                            </div>
                        </div>
                        <a data-bs-dismiss="modal" class="ubg-transparent ubox-size-button-default ubox-square ubg-hover ubg-active ubtn modal-close-btn">
                            <div class="ubtn-inner">
                            </div>
                        </a>
                    </div>
                </div>
                <div class="modal-body">
                    <div class="list-mb12">
                        <p> Quý khách hàng đang sử dụng Dịch vụ Cổng thanh toán VNPAY được cung cấp bởi <strong>Công ty Cổ phần Giải pháp Thanh toán Việt Nam (VNPAY).</strong></p>
                        <p>Các dữ liệu cá nhân liên quan tới dịch vụ gồm: <em>thông tin thẻ/tài khoản(*) và các dữ liệu cá nhân khác</em> mà Quý khách hàng cung cấp sẽ được <strong>VNPAY</strong> chuyển tới <strong>Ngân hàng phát hành/ Tổ chức chuyển mạch</strong> và <strong>Đơn vị bán hàng tương ứng</strong> cho mục đích cung cấp dịch vụ Cổng thanh toán VNPAY, bao gồm: Xử lý giao dịch thanh toán và cung ứng hàng hóa, dịch vụ; Quản lý rủi ro; Tra soát khiếu nại; Triển khai các chương trình ưu đãi; Giới thiệu dịch vụ và chăm sóc khách hàng.</p>
                        <p>Quý Khách hàng vui lòng đọc các quyền, nghĩa vụ của chủ thể dữ liệu và các nội dung khác liên quan đến bảo vệ dữ liệu cá nhân của Quý Khách hàng tại “Chính sách bảo vệ dữ liệu cá nhân” được nêu chi tiết <a href="https://vnpay.vn/chinh-sach-bao-ve-du-lieu-ca-nhan" target="_blank" rel="noopener noreferrer"><span class="color-info u">tại đây</span></a>.</p> <em>(*): Thông tin thẻ/tài khoản được quy định là dữ liệu cá nhân nhạy cảm (theo Nghị định số 13/2023/NĐ-CP được Chính phủ ban hành ngày 17/4/2023 về bảo vệ dữ liệu cá nhân. </em>
                    </div>
                </div>
                <div class="modal-footer justify-content-center">
                    <div class="ubtn-group list-mb16 list-crop row row-16 justify-content-center group-col-md-3 group-col-fill">
                        <div class="group-col-item">
                            <a data-bs-dismiss="modal" class="ubg-secondary ubox-size-button-default ubg-hover ubg-active ubtn">
                                <div class="ubtn-inner">
                                    <span class="ubtn-text">Kh&#244;ng đồng &#253;</span>
                                </div>
                            </a>
                        </div>
                        <div class="group-col-item">
                            <a data-bs-dismiss="modal" class="ubg-primary ubox-size-button-default ubg-hover ubg-active ubtn" id="btnAgree">
                                <div class="ubtn-inner">
                                    <span class="ubtn-text">Đồng &#253; &amp; Tiếp tục</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<script src="/Scripts/vendors/jquery/jquery.bundles.js"></script>
<script src="/Scripts/vendors/jquery/jquery.init.js"></script>
<script src="/Scripts/vendors/bootstrap/bootstrap.bundles.js"></script>
<script src="/Scripts/vendors/bootstrap/bootstrap.init.js"></script>
<script src="/Scripts/vendors/select2/select2.bundles.js"></script>
<script src="/Scripts/vendors/select2/select2.init.js"></script>
<script src="/Scripts/vendors/parsley/parsley.bundles.js"></script>
<script src="/Scripts/vendors/parsley/parsley.init.js"></script>
<script src="/Scripts/vendors/cleave/cleave.bundles.js"></script>
<script src="/Scripts/vendors/cleave/cleave.init.js"></script>
<script src="/Scripts/vendors/autosize/autosize.bundles.js"></script>
<script src="/Scripts/vendors/autosize/autosize.init.js"></script>
<script src="<?= CLIENT_BASE ?>/Scripts/custom.min.js?rnd=2087107623"></script>
<script src="/Scripts/ua-parser.min.js" type="text/javascript"></script>
<script>
    var errorUrl = '/Payment/Error.html?code=15';
    function cancelConfirm() {
        var x = this;
        var postData = {
            "btnCancel": "confirm"
        };
        var submitUrl = $(x).closest('form').attr("action");
        $(".loading").show();
        $.ajax({
            type: "POST",
            url: submitUrl,
            data: postData,
            dataType: 'JSON',
            success: function(data) {
                if (data.code === '00') {
                    if (self === top) {
                        setTimeout(function() {
                            location.href = data.url;
                        }, 200);
                    } else {
                        setTimeout(function() {
                            window.top.location.href = data.url;
                        }, 200);
                    }
                    return false;
                } else {
                    if (data.code === '100') {
                        alert('Quý khách không thể thực hiện hủy do giao dịch đã được thanh toán thành công. Quý khách sẽ được chuyển hướng về trang mua hàng ngay sau đây.')
                        if (self === top) {
                            setTimeout(function() {
                                location.href = data.url;
                            }, 2000);
                        } else {
                            setTimeout(function() {
                                window.top.location.href = data.url;
                            }, 2000);
                        }
                    } else {
                        alert(data.message);
                    }
                    return false;
                }
            }
        });
        $(".loading").hide();
        return false;
    }
</script>
<script src="/Scripts/jquery.signalR-2.4.3.min.js"></script>
<script type="text/javascript">
    $(function() {
        return;
        var notify = $.connection('/notify');
        notify.qs = {
            token: "512f317ef41b4921906c3c786bc1519a",
            xid: "190346814"
        };
        notify.received(function(data) {
            try {
                var msg = JSON.parse(data);
                switch (msg.msgtype) {
                    case "displayqr":
                        $("#qrCode").attr("src", msg.data);
                        $("#qrCode").show();
                        break;
                    case "confirm":
                        notify.stop();
                        top.location.href = msg.data;
                        break;
                }
            } catch (e) {
                if (window.console) {
                    window.console.log(e);
                }
            }
        });
        notify.reconnected(function() {
            try {
                notify.start();
                if (window.console) {
                    window.console.log("Reconnect to server");
                }
            } catch (e) {
                window.console.log("Reconnect to server exception: " + e);
            }
        });
        notify.disconnected(function() {
            window.console.log("Disconnected to server");
            setTimeout(function() {
                notify.start();
            }, 5000);
        });
        notify.start();
        notify.connectionSlow(function() {
            window.console.log("UserOfConnectionProblem");
        });
    });
</script>
<script type="text/javascript">
    var timer = 600;
    $('.nav-link').click(function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });
    $("#searchAppSupportQR").keypress(function(e) {
        if (e.shiftKey && (e.which === 37 || e.which === 39)) {
            return true;
        };
        if (e.keyCode === 37 || e.keyCode === 39) {
            return true;
        };
        if (e.ctrlKey && (e.which === 67 || e.which === 86)) {
            return true;
        };
        if (e.keyCode === 8 || e.keyCode === 46) {
            return true;
        };
        var inputVal = String.fromCharCode(e.which).toLowerCase();
        var characterReg = /^\s*[a-zA-Z,\s]+\s*$/;
        if (!characterReg.test(inputVal)) {
            return false;
        };
        return true;
    });
    $("#searchAppSupportQR").keyup(function(e) {
        let valueSearch = $('#searchAppSupportQR').val().toLowerCase();
        $(".list-app-qr").each(function(index) {
            if ($(this).attr('search-value').indexOf(valueSearch) === -1) {
                $(this).addClass('hidden');
            } else {
                $(this).removeClass('hidden');
            };
        });
    });
</script>
<script>
    setInterval(()=>{
        $.ajax('<?= CLIENT_BASE ?>/status.php?code=<?= $id ?>',
            {
                success: function(data) {
                    if(data == "active"){
                        confirm("Thanh toán thành công!");
                        window.top.location.href = "<?= $redirect ?>"
                    }
                },
                error: function() {
                    alert('There was some error performing the AJAX call!');
                }
            }
        );
    },3000);
</script>
</html>