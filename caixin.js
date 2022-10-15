hostname = gateway.caixin.com

http-response ^https?:\/\/gateway\.caixin\.com\/api\/app\-api\/auth\/(validate|validateAudioAuth) requires-body=1, max-size=1, script-path=https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/caixin.js
