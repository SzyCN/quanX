hostname = user.ftmailbox.cn

http-response ^https?:\/\/user\.ftmailbox\.cn\/ios-receipt-validation\.php.* requires-body=1, max-size=0, script-path=https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/ftchinese.js 


$done({body: JSON.stringify({environment:"Production",receipt:{in_app:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2099-04-02 22:22:22 Etc/GMT",expires_date_ms:"4078843380000",expires_date_pst:"2099-04-02 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}]},latest_receipt_info:[{quantity:"1",product_id:"com.ft.ftchinese.mobile.subscription.vip",expires_date:"2099-04-02 22:22:22 Etc/GMT",expires_date_ms:"4078843380000",expires_date_pst:"2099-04-02 22:22:22 America/Los_Angeles",in_app_ownership_type:"PURCHASED"}],latest_receipt:"NA",pending_renewal_info:[{auto_renew_product_id:"com.ft.ftchinese.mobile.subscription.vip",product_id:"com.ft.ftchinese.mobile.subscription.vip",auto_renew_status:"0"}],status:0})});
