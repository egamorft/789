<?php
use Firebase\JWT\JWT;
use \Firebase\JWT\Key;
function check_server_ip($ip){
    $host= gethostname();
    $_ip = gethostbyname($host);
    return $_ip == $ip;
};
function check_maintenance(){
    global $setting;
    if(@$setting['maintenance'] == true){
        http_response_code(503);
        echo '<body style="text-align: center;font-size: xxx-large;">Bảo trì</body>';
        die();
        return;
    }
};
function showex(Exception $ex){
    $message = $ex->getMessage();
    $message = str_replace("'","\'",$message);
    $_SESSION['error'] = $message;
};
function showmessage(string $message){
    $_SESSION['message'] = $message;
};
function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
};
function generate_uuid() {
    return sprintf( '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        mt_rand( 0, 0xffff ), mt_rand( 0, 0xffff ),
        mt_rand( 0, 0xffff ),
        mt_rand( 0, 0x0C2f ) | 0x4000,
        mt_rand( 0, 0x3fff ) | 0x8000,
        mt_rand( 0, 0x2Aff ), mt_rand( 0, 0xffD3 ), mt_rand( 0, 0xff4B )
    );
};
function caheoxanh_nap($id,$amount){
    global $setting;
    $url = $setting['api']."/api/MM/RegCharge?apiKey=".$setting['apikey']."&chargeType=bank&amount=".$amount."&requestId=".$id;
    $data = json_decode(file_get_contents($url),true);
    return $data['data'];
};
function cuoc($tickets,$term,$ignore = true){
    $total = 0;
    foreach ($tickets as $key => $value) {
        $total += bet($value['BetType'],$value['GameType'],$value['Items']);
    };
    return [
        $value['BetType'],$value['GameType'],uniqid(),$total
    ];
};
function bet($type,$gametype,$items){
    $total = 0;
    $games = getgames();
    $game = null;
    foreach ($games as $k1 => $v1) {
        if($v1['GameType'] == $gametype && $v1['BetType'] == $type){
            $game = $v1;
        };
    };
    $index  = indexbet();
    foreach ($items as $key => $value) {
        $amount = $value['Point'] * $value['Price'];
        $number = $value['Numbers'][0];
        memberbet($number,$amount,$game,$value['Point'],$index);
        $total += $amount;
    };
    return $total;
};
function indexbet(){
    global $member;
    global $bets;
    $index = 1;
    foreach ($bets as $key => $value) {
        if(!is_arrays($value)) continue;
        if($value['member'] == $member['id']){
            $index = $value['index'] + 1;
        };
    };
    return $index;
}
function memberbet(string $number,int $amount,$game,$point,$index){
    global $member;
    global $bets;
    if($member['total'] < $amount) throw new Exception("total", 1);
    $id = uniqid();
    $bets[$id] = arrs([
        "id" => $id,
        "member" => $member['id'],
        "number" => $number,
        "amount" => $amount,
        "name" => $game['Name'],
        "code" => $game['GameType']."-".$game['BetType'],
        "term" => currentterm(),
        "status" => "await",
        "point" => $point,
        "index" => $index,
        "created" => new DateTime(),
    ]);
    $member['total'] = $member['total'] - $amount;
};
function currentterm(){
    return date("Y-m-d");
};
function getgames(){
    return require_once __ROOT__."/game.php";
};
function jwtmember($member){
    global $jwts;
    $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    $issuedAt   = new DateTimeImmutable();
    $expire     = $issuedAt->modify('+60 minutes')->getTimestamp();
    $serverName = "789vip1.com";
    $id   = $member['id'];
    $data = [
        'iat'  => $issuedAt->getTimestamp(),
        'iss'  => $serverName,
        'nbf'  => $issuedAt->getTimestamp(),
        'exp'  => $expire,
        'id' => $id,
    ];
    $id = uniqid();
    $jwt = arrs([
        "id" => $id,
        'member' => id($member),
        "AccessToken" => JWT::encode($data,$secretKey,'HS512'),
        "ExpiresIn" => "36000",
        "IdToken" => "",
        "RefreshToken" => "",
        "TokenType" => "Bearer",
        "status" => "active",
    ]);
    $jwts[$id] = $jwt;
    return $jwt;
};
function authjwt(){
    global $member;
    global $members;
    global $mid;
    $matches = [];
    if (!@preg_match('/Bearer\s(\S+)/',@$_SERVER['HTTP_AUTHORIZATION'],$matches)) {
        header('HTTP/1.0 400 Bad Request');
        exit;
    };
    $jwt = $matches[1];
    if (! $jwt) {
        header('HTTP/1.0 400 Bad Request');
        exit;
    };
    $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    $token = JWT::decode($jwt,new Key($secretKey,'HS512'));
    $now = new DateTimeImmutable();
    $serverName = "789vip1.com";
    if (
        $token->iss !== $serverName ||
        $token->nbf > $now->getTimestamp() ||
        $token->exp < $now->getTimestamp())
    {
        header('HTTP/1.1 401 Unauthorized');
        exit;
    };
    $mid = $token->id;
    $member = $members[$mid];
};
function res($callable){
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        return;
    }
    try {
        $res = $callable();
        if($res){
            $res->send();
        };
    } catch (\Exception $ex) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($ex->getCode());
        echo json_encode([
            "message" => $ex->getMessage()
        ]);
    }
};
class JsonResponse{
    public $data;
    function __construct($data = []) {
        $this->data = $data;
    }
    public function send(){
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($this->data);
    }
};
function headercross(){
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');
};