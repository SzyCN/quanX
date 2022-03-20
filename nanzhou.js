hostname = api.infzm.com

http-response ^https?:\/\/api\.infzm\.com\/mobile\/(user|contents\?|contents\/\d+\?|contents\/\d+\/isview\?|course_borrow|courses\/\d+\?|mall|course_items) requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/SzyCN/quanX/main/nanfangzhoumo.js
