hostname = dayone.*，dayone.me
  
http-response ^https:\/\/dayone\.(me|app)\/api\/(users|v2\/users\/(account-status|receipt))$ requires-body=1, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/dayone.js 
