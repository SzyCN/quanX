hostname=api.revenuecat.com

http-response ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ requires-body=1, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/filebox.js
http-response ^https?:\/\/api\.revenuecat\.com\/v\d\/receipts$ requires-body=1, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/filebox.js
