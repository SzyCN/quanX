#!name=Unlock Youtube Premium
#!desc=YouTube

[URL Rewrite]
https?:\/\/.+.googlevideo.com\/ptracking\?pltype=adhost, -reject
https?:\/\/.+.youtube.com\/api\/stats\/ads, -reject
https?:\/\/.+.youtube.com\/get_midroll_, -reject
https?:\/\/.+.youtube.com\/pagead\/, -reject
https?:\/\/.+.youtube.com\/ptracking\?, -reject
https?:\/\/.+.youtube.com\/_get_ads, -reject
https?:\/\/youtubei.googleapis.com\/.+ad_break, -reject
https?:\/\/youtubei.googleapis.com\/youtubei\/.+(ad|log), -reject
https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adformat, -reject
https?:\/\/[\w-]+\.googlevideo\.com\/.+&oad, -reject -tinygif

http-response ^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A), requires-body=1, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/youtube.js

hostname =  *.googlevideo.com, *.youtube.com, youtubei.googleapis.com
