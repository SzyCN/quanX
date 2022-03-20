hostname =  dayone.*
  
http-response ^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ script-path=https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/dayone.js
