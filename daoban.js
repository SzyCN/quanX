// ==UserScript==
// @Name              网球规则[翻译]成Surge、QuantumultX、Loon脚本
// @Author            Cuttlefish
// @Tg group          https://t.me/ddgksf2013
// @WechatID          公众号墨鱼手记
// @UpdateTime        20200910
// @ScriptURL         https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sample.js
// ==/UserScript==

// ==KeyExplain==
// @Function          text.replace(regexp/substr,replacement)
// @key1              待替换的关键字段1
// @key2              待替换的关键字段2
// @originalValue     字段key对应的原始value
// @replaceValue      字段key替换之后的value
// @/g                正则匹配时匹配多个key键值
// ==/KeyExplain==

let obj = JSON.parse($response.body);
obj={
   "code": "1",
  "msg": "",
  "data": {
    "status": 1,
    "remainDays": 365,
    ”remainMonths": 12,
    "endDate": "2022-07-02"
｝
｝
$done({body: JSON.stringify(obj)});
