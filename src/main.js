// ----------------------------------------
// INIT VUE -------------------------------
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// ----------------------------------------
// INIT FIREBASE --------------------------
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"
firebase.initializeApp({
    apiKey: "AIzaSyDpfuuK3MQtUZbZ2UCbegfqyjV6MnMT0pA",
    authDomain: "tbc-evidence-finder.firebaseapp.com",
    databaseURL: "https://tbc-evidence-finder.firebaseio.com",
    projectId: "tbc-evidence-finder",
    storageBucket: "",
    messagingSenderId: "446979137577",
    appId: "1:446979137577:web:233319301cfc0e43"
})

// FIRESTORE
Vue.prototype.$db = firebase.firestore()

// FIREBASE AUTH
const firebaseAuth = firebase.auth()
firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
Vue.prototype.$auth = firebaseAuth

// FIREBASE STORAGE
Vue.prototype.$storage = firebase.storage()


// ----------------------------------------
// VUE INSTANCE ---------------------------
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
