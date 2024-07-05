<?php
require_once __DIR__."/init.php";
require_once __LIB_CONTROL__;
$_GET['id'] = "default";
$control = new EntityHttpControl($settings);
try {
    $control->process();
} catch (\Exception $ex) {
    showex($ex);
    return reload();
}
$data = $control->data;
?>
<!DOCTYPE html>
<html lang="en">
<?php require_once __CMS1_INCLUDE__."/head.php"; ?>
<body class="app">
    <?php include __CMS1_INCLUDE__."header.php"; $setting = null; ?>
    <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
            <div class="container-xl">
                <h1 class="app-page-title">Cấu hình</h1>
                <hr class="mb-4">
                <div class="row g-4 settings-section">
                    <div class="col-12">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <?php $mode = $control->method;$meta = $setting_meta;$data = $control->data;$require = []; $undeleted = true; $display = ["theme"=>"name"]; include __CMS1_INCLUDE__."form.php" ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include __CMS1_INCLUDE__."footer.php" ?>
    </div>
    <?php include __CMS1_INCLUDE__."footer-script.php" ?>
    <?php include __CMS1_INCLUDE__."error.php" ?>
</body>
</html>