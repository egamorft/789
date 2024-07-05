<?php
register_event('json.decode',function(&$data){
    if(isset($data['created'])){
        $data['created'] = DateTime::__set_state($data['created']);
    };
});
register_event('log.info',function($data){
});
register_event('log.warning',function($data){
});
register_event('log.error',function($data){
});
register_event('transaction.push',function($tran){
    return;
    $data = caheoxanh_nap($tran['code'],$tran['amount']);
    $tran['content'] = $data['code'];
    $tran['bank'] = strtolower($data['bank_provider'])."-".$data['phoneNum'];
    $tran['momo'] = $data['redirect_ssl'];
});
register_event('transaction.update',function($tran){
    global $providers;
    $provider = $providers[$tran['provider']];
    if($tran['status'] == "active"){
        $url = $provider['callback']."?id=".$tran['icode']."&key=".$provider['token'];
        @file_get_contents($url);
    };
});