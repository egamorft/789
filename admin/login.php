<?php
require_once __DIR__."/../init.php";
define("CSM_TITLE","Admin");
$include = __INCLUDE__."/head.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	try{
		login();
		$_SESSION['id'] = id($user);
		_run_event("log.info",__("admin_login"));
		header("Location: ".ADMIN_BASE);
		exit;
	}catch(\Exception $ex){
		showex($ex);
	}
}
function login(){
    global $users;
    global $user;
    $username = $_POST['username'];
    $password = $_POST['password'];
    foreach ($users as $value) {
		if(!is_arrays($value)) continue;
        if(@$value['type'] !== "admin") continue;
        if(@$value['username'] == $username){
            if($value['password'] == $password){
				if(@$value['status'] == "block") throw new Exception("block", 1);
                $user = $value;
				return;
            }
        }
    }
    throw new Exception("Auth",1);
}
?>
<!DOCTYPE html>
<html lang="en"> 
<?php require_once __CMS1_INCLUDE__."/head.php"; ?>
<body class="app app-login p-0">    	
    <div class="row g-0 app-auth-wrapper">
	    <div class="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
		    <div class="d-flex flex-column align-content-end">
			    <div class="app-auth-body mx-auto">	
				    <div class="app-auth-branding mb-4"><a class="app-logo" href="/"><img class="logo-icon me-2" src="<?= @$setting['logo'] ?>" alt="logo"></a></div>
					<h2 class="auth-heading text-center mb-5">Quản lý hệ thống</h2>
			        <div class="auth-form-container text-start">
						<form method="POST" class="auth-form login-form">         
							<div class="email mb-3">
								<label class="sr-only" for="signin-email">Tên đăng nhập</label>
								<input name="username" type="text" class="form-control signin-email" placeholder="Tên đăng nhập" required="required">
							</div>
							<div class="password mb-3">
								<label class="sr-only" for="signin-password">Mật khẩu</label>
								<input name="password" type="password" class="form-control signin-password" placeholder="Mật khẩu" required="required">
								<div class="extra mt-3 row justify-content-between">
									<div class="col-6">
										<div class="form-check">
											<input class="form-check-input" type="checkbox" value="">
											<label class="form-check-label" for="RememberPassword">
												Ghi nhớ
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="text-center">
								<button type="submit" class="btn app-btn-primary w-100 theme-btn mx-auto">Đăng nhập</button>
							</div>
						</form>
					</div>
			    </div>
				<?php include __CMS1_INCLUDE__."footer.php" ?>
		    </div>
	    </div>
	    <div class="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
		    <div class="auth-background-holder">
		    </div>
		    <div class="auth-background-mask"></div>
		    <div class="auth-background-overlay p-3 p-lg-5">
			    <div class="d-flex flex-column align-content-end h-100">
				    <div class="h-100"></div>
				</div>
		    </div>
	    </div>
    </div>
	<?php include __CMS1_INCLUDE__."footer-script.php" ?>
    <?php include __CMS1_INCLUDE__."error.php" ?>
</body>
</html> 

