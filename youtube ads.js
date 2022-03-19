#!name=Unlock Youtube Premium
#!desc=YouTube


https?:\/\/.+.googlevideo.com\/ptracking\?pltype=adhost, REJECT
https?:\/\/.+.youtube.com\/api\/stats\/ads, REJECT
https?:\/\/.+.youtube.com\/get_midroll_, REJECT
https?:\/\/.+.youtube.com\/pagead\/, REJECT
https?:\/\/.+.youtube.com\/ptracking\?, REJECT
https?:\/\/.+.youtube.com\/_get_ads, REJECT
https?:\/\/youtubei.googleapis.com\/.+ad_break, REJECT
https?:\/\/youtubei.googleapis.com\/youtubei\/.+(ad|log), REJECT
https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adformat, REJECT
https?:\/\/[\w-]+\.googlevideo\.com\/.+&oad, REJECT TINYGIF

http-response ^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A), requires-body=1, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/youtube.js

hostname =  *.googlevideo.com, *.youtube.com, youtubei.googleapis.com
