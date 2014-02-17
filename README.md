Accessopolis App
==========================

Mobile application used to create and upload photos and videos to [Accessopolis Website](http://accessopolis.ch)



Developer Guidelines
==========================

#### Prepare development environment
- Install npm (node package manager): google is your friend
- Install cordova:
> npm install -g cordova
- Install ionic:
> npm install -g ionic

#### Work on the application
- Checkout the application code from GitHub
- Open Terminal (command prompt)

> cd accessopolis-app/

> launch in www/ webserver for localhost
Open in browser

> ionic platform android
> ionic emulate android
> ionic run android (with a device connected in debug mode)


#### Package the application

> cordova build android
> cd platforms/android/
> ant release

File platforms/android/bin/AccessopolisApp-release-unsigned.apk has to be signed before it can be used on Android devices
when referring to $FILENAME we refer to this file

#### Sign the application for delivery
(as reference see http://developer.android.com/tools/publishing/app-signing.html)

Create a keystore
>  keytool -genkey -v -keystore my.keystore -alias accessopolis -keyalg RSA -keysize 2048 -validity 10000

Sign the packaged file
> jarsigner -verbose -keystore my.keystore $FILENAME accessopolis