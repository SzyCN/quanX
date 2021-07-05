/*
CamScanner 解锁部分高级特权

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body 

[mitm]
hostname = ap*.intsig.net

***************************

let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"4073275762"}}};
$done({body: JSON.stringify(obj)});
