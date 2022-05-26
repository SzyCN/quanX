hostname=*.kuwo.cn

http-response ^http://(.+).kuwo.cn(/v2/api/user/info|/a.p|/vip/v2/user/vip) url requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/kwyy.js
