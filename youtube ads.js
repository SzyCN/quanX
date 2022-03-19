#!name=Unlock Youtube Premium
#!desc=YouTube

[Rule]
URL-REGEX,https?:\/\/.+.googlevideo.com\/ptracking\?pltype=adhost,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/api\/stats\/ads,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/get_midroll_,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/pagead\/,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/ptracking\?,REJECT
URL-REGEX,https?:\/\/.+.youtube.com\/_get_ads,REJECT
URL-REGEX,https?:\/\/youtubei.googleapis.com\/.+ad_break,REJECT
URL-REGEX,https?:\/\/youtubei.googleapis.com\/youtubei\/.+(ad|log),REJECT
URL-REGEX,https?:\/\/s\.youtube\.com\/api\/stats\/qoe\?adformat,REJECT
URL-REGEX,https?:\/\/[\w-]+\.googlevideo\.com\/.+&oad,REJECT-TINYGIF

http-response ^https?:\/\/.+?\.googlevideo\.com\/.+&(oad|ctier)=(?!A), requires-body=1, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/youtube.js

hostname =  *.googlevideo.com, *.youtube.com, youtubei.googleapis.com
