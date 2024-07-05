<header class="app-header fixed-top">
    <div class="app-header-inner">
        <div class="container-fluid py-2">
            <div class="app-header-content">
                <div class="row justify-content-between align-items-center">
                    <div class="col-auto">
                        <a id="sidepanel-toggler" class="sidepanel-toggler d-inline-block d-xl-none" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" role="img">
                                <title>Menu</title>
                                <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M4 7h22M4 15h22M4 23h22"></path>
                            </svg>
                        </a>
                    </div>
                    <div class="search-mobile-trigger d-sm-none col" style="pointer-events: none;">
                        <?= $member['username'] ?>
                    </div>
                    <div class="app-search-box col">
                        <?= $member['username'] ?>
                    </div>
                    <div class="app-utilities col-auto">
                        <?php if($member['type'] == "vip") {?>
                        <div class="app-utility-item"><?= __("vip") ?></div>
                        <?php }?>
                        <div class="app-utility-item"><?= $member['total'] ?>$</div>
                        <div class="app-utility-item">
                            <a href="settings.php" title="Cấu hình">
                                <i class="fa-solid fa-gear"></i>
                            </a>
                        </div>
                        <div class="app-utility-item app-user-dropdown dropdown">
                            <a class="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img src="<?= $member['logo'] ?>"></a>
                            <ul class="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                <li><a class="dropdown-item" href="account.php">Tài khoản</a></li>
                                <li><a class="dropdown-item" href="settings.php">Cấu hình</a></li>
                                <li><a class="dropdown-item" href="baomat.php">Bảo mật</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="logout.php">Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="app-sidepanel" class="app-sidepanel">
        <div id="sidepanel-drop" class="sidepanel-drop"></div>
        <div class="sidepanel-inner d-flex flex-column">
            <a href="#" id="sidepanel-close" class="sidepanel-close d-xl-none">&times;</a>
            <div class="app-branding">
                <a class="app-logo" href="index.php"><img class="logo-icon me-2" src="<?= @$member['logo'] ?>"><span class="logo-text"><?= @$msetting['name'] ?></span></a>
                <a class="app-logo" href="index.php"><img src="<?= APP_LOGO ?>" class="logo-icon me-2" style="width: unset;"><span class="logo-text"></span></a>
            </div>
            <?php include __CMS1_INCLUDE__."/nav.php" ?>
            <div class="app-sidepanel-footer">
                <?php include __CMS1_INCLUDE__."/nav-footer.php" ?>
            </div>
        </div>
    </div>
</header>
<style>
    html{
        background: #011022 !important;
    }
    .app{
        background: url('<?= STATIC_BASE ?>/img/image.png') !important;
        background-size: cover !important;
        background-repeat: no-repeat !important;
        background-position: top !important;
    }
</style>