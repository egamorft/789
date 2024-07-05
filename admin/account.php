<?php
require_once __DIR__."/init.php";
require_once __LIB_CONTROL__;
$_GET['id'] = id($user);
$control = new EntityHttpControl($users);
$control->process();
$data = $control->data;
?>
<!DOCTYPE html>
<html lang="en">
<?php require_once __CMS1_INCLUDE__."/head.php"; ?>
<body class="app">
    <?php include __CMS1_INCLUDE__."header.php"; $user = null; ?>
    <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
            <div class="container-xl">
                <h1 class="app-page-title">Cấu hình</h1>
                <hr class="mb-4">
                <div class="row g-4 settings-section">
                    <div class="col-12">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <form method="POST" class="settings-form">
                                    <div class="mb-3">
                                        <label for="setting-input-1" class="form-label">Tên</label>
                                        <input name="name" type="text" class="form-control" value="<?= @$data['name'] ?>" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="setting-input-2" class="form-label">Logo</label>
                                        <input name="logo" type="text" class="form-control" value="<?= @$data['logo'] ?>" required>
                                    </div>
                                    <div class="mb-3">
                                        <label for="setting-input-3" class="form-label">Mật khẩu</label>
                                        <input name="password" type="text" class="form-control" value="<?= @$data['password'] ?>">
                                    </div>
                                    <button type="submit" class="btn app-btn-primary">Lưu</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php include __CMS1_INCLUDE__."footer.php" ?>
    </div>
    <?php include __CMS1_INCLUDE__."footer-script.php" ?>
</body>
</html>