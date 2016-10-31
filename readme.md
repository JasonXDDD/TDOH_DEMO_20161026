#TDOH - DEMO
2016/10/26 TDOH DEMO
**framework: Angular2 + FireBase**

---

## I. INSTALL

1. install **node.js**，and test `cmd: npm -v` look npm version
2. install **angular2-cli**
```bash
	$npm install -g angular2-cli
	$ng
	$ng -v
```
3. build a new project and startup
```bash
	$cd dirPahh/
	$ng new projectName --skip-npm
	$cd projectName/
	$npm install
	$ng serve
```
4. add **firebase** and **angularfire2** in the project
```bash
	$npm install firebase angularfire2 --save
```

---

##II. Set Your Page in Component

download **demoPage.zip**, unzip, and copy to your ng2 project

- `src/index.html`: copy origin `demoPage/index.html `**head tag**
- `src/app/appcomponent.ts, html, css`: copy `demoPage/index.html` **body tag**
- `src/assets`: copy `demoPage/assets/`

---

##III. Connect Firebase Account

serf [https://console.firebase.google.com/](https://console.firebase.google.com/) and create a project.

and copy the config in your ng2 project
```javascript
export const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
}
```

- add **AngularFireModule** into **AppModule**
```javascript
	AngularFireModule.initializeApp(firebaseConfig)
```

- For **VScode**， set firebase module config into reference `typings.d.ts`
```typescript
	/// <reference path="../node_modules/firebase/firebase.d.ts" />
```

---

##IV. Use AngularFire
- import **AngularFire** into component
- constructor implement **AngularFire**
- link the db in your **prop.**
- **prop.** must be `FirebaseListObservable` type, so you must import `FirebaseListObservable` from **AngularFire**
- you can control **prop.** to **add** or **list** your db data
- **remove/update/set** : you must select a object

---

##V. Firebase Hosting
- ng2 project webpack build porduct
```bash
	$ng build -prod
```
- for first use, download firebase tools
```bash
	$npm install -g firebase-tools
```
- doing with the process
```bash
	$firebase login
	$firebase init
	$firebase use -add
	$firebase deploy
```

---

##VI. Resource
- Slide: [http://slides.com/jasonxddd/tdoh_demo_20161026/fullscreen](http://slides.com/jasonxddd/tdoh_demo_20161026/fullscreen)
- Firebase: [https://console.firebase.google.com/](https://console.firebase.google.com/)
- AngualrFire2: [https://angularfire2.com/api/](https://angularfire2.com/api/)
