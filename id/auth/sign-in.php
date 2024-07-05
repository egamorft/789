<?php
require_once __DIR__."/../init.php";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	try{
		$jwt = login();
        echo json_encode([
            "AccessToken" => $jwt['AccessToken'],
            "ExpiresIn" => "3600",
            "IdToken" => $jwt['AccessToken'],
            "RefreshToken" => $jwt['AccessToken'],
            "TokenType" => "Bearer"
        ]);
        exit;
	}catch(\Exception $ex){
        http_response_code(400);
		echo '{
            "code": "UserNotFoundException",
            "message": "Tài khoản '.$_POST['Username'].' không tồn tại.",
            "error" : "'.$ex->getMessage().'"
        }';
	}
};
function login(){
    global $members;
    $username = $_POST['Username'];
    $password = $_POST['Password'];
    $scope = @$_POST['Scope'];
    foreach ($members as $value) {
		if(!is_arrays($value)) continue;
        if(@$value['username'] == $username){
            if($value['password'] == $password){
				if(@$value['status'] == "block") throw new Exception("block", 1);
                if($scope == "backend"){
                    if($value['type'] == "daily"){
                        return jwtmember($value);
                    };
                }else{
                    return jwtmember($value);
                }
            };
        };
    };
    throw new Exception("Auth",1);
};
