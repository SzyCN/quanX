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

var body = $response.body.replace(/"endDate": 2021-09-23/g;'"endDate": 2022-10-24'). replace(/"remainMonths":2/g,:'"remainMonths":15').replace(/"remainDays":84/g,'"remainDays":450');
$done({ body });
