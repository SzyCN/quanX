hostname = dayone.*

http-response ^https:\/\/dayone\.(me|app)\/api\/(users|v2\/users\/(account-status|receipt))$ requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/dayone1.js

