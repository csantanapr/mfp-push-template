function sendNotification(notificationText) {
    var notificationOptions = {};
    notificationOptions.message = {};
    notificationOptions.message.alert = notificationText;
    notificationOptions.settings = {
    		apns:{
    			sound:'default'
    		}
    };
    WL.Server.sendMessage("com_ibm_pushapp", notificationOptions);

    return {
        result : "Notification sent to all users."
    };
}
