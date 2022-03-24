hostname=rich.kuwo.cn,*.kwcdn.kuwo.cn,mobilead.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn, audiobookpay.kuwo.cn, tingshu.kuwo.cn,omp-audiobookpay.lrts.me

DOMAIN-SUFFIX,^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url REJECT
DOMAIN-SUFFIX,^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url REJECT
DOMAIN-SUFFIX,https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/Ad url REJECT
DOMAIN-SUFFIX,https?:\/\/audiobookpay\.kuwo\.cn/a\.p\?op=get_advertright url REJECT-DICT


http-response https?:\/\/omp-audiobookpay\.lrts\.me\/a\.p requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
http-response ^https?:\/\/audiobookpay\.kuwo\.cn/a\.p requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
http-response https://tingshu.kuwo.cn/v2/api/user/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
http-response https?:\/\/audiobooks\.kuwo\.cn\/v2\/api\/user\/info requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
http-response https?:\/\/tingshu\.kuwo\.cn\/v2\/api\/pay\/vip\/extraVipStatus requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
http-response ^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/kwyy.js
