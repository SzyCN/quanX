#!name=分贝仪
#!desc=分贝仪会员解锁
#!homepage=
#!author=SzyCN
#!icon=

[Script]

http-response ^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ script-path=https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/fenbeiyi.js, requires-body=true, timeout=10, tag=fenbeiyi

[MITM]

hostname = api.revenuecat.com
