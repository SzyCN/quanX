hostname = license.enpass.io

http-response ^https:\/\/license\.enpass\.io/api/.+/subscription/me requires-body=1, max-size=0, control-api=1, script-path=https://raw.githubusercontent.com/langkhach270389/Surge-LK/main/scripts/langkhach/enpass.js
