#Sample Application for Push Notifications

## 1. Create a MFP Cordova Application

    mfp cordova create pushapp -p android --template mfp-push-template/pushapp
    cd pushapp
    mfp cordova plugin mfp-push
    mfp config android_push_sender_key JfuHBathf-kZPuIXhfnapwlrtk5qQJZ8WGopNE
    mfp config android_push_sender_id 1112233345678

- After doing that, you'll need to open your platforms/android/AndroidManifest.xml and add this line right before the closing `</application>` tag:

```xml
<meta-data android:name="com.google.android.gms.version" android:value="4030500"/>
```

## 2. Create Local MFP Server, or Use Remote MFP Server

    cd ..
    mfp cordova create backendServer
    cd backendServer
    cp -r PushAdapter adapters/
    mfp start

## 3. Push Application to MFP Server

    cd pushapp
    mfp push

## 4. Run the App on Android Device

    cd pushapp
    mfp cordova run

## 5. Send a Push Notification

    cd backendServer
    mfp adapter call PushAdapter/sendNotification \"This is test1\"
