hostname = audiobookpay.kuwo.cn, tingshu.kuwo.cn,omp-audiobookpay.lrts.me

http-response ^https?:\/\/audiobookpay\.kuwo\.cn/a\.p requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/kwbookpay.js
http-response ^https?:\/\/tingshu\.kuwo\.cn/v2\/api\/user\/ requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/kwtingshu.js
