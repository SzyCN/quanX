/*
Author：@ddgksf2013   hostname = musicpay.kuwo.cn, vip1.kuwo.cn

通知频道：https://t.me/ddgksf2021

公众号：墨鱼手记

*/
var body = $request.body.replace(/uid=\d+/g, 'uid=6')
$done({ body });
