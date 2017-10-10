# -*- coding: utf-8 -*-

import requests

url = "https://slack.com/api/chat.postMessage"

params = {
	"token":"xoxp-18471250721-41922546531-210911699312-9ad8d69b180c99acb2f001fda69958f4",
	"channel":"#bot_making",
	"as_user": "true",
	"text" : "あかねちゃんやで〜"
}

r = requests.post(url, params=params)

if r.status_code==200:
	print "success"
	print r.text
else:
	print "failed"

