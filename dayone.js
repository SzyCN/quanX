hostname = dayone.*，dayone.me
  
http-response ^https:\/\/dayone\.me\/api\/(users|v2\/users\/account-status)$ script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/dayone.js
