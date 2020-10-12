const firebaseConfig = {
    apiKey: "AIzaSyB1u9DnERvsIxMA9izuCe592vQB-LBpL7Q",
    authDomain: "genesis-vpn-afb4b.firebaseapp.com",
    databaseURL: "https://genesis-vpn-afb4b.firebaseio.com",
    projectId: "genesis-vpn-afb4b",
    storageBucket: "genesis-vpn-afb4b.appspot.com",
    messagingSenderId: "190492178526",
    appId: "1:190492178526:web:bcf2fc3e0efb78ea57dccf",
    measurementId: "G-RJLJ53KJFJ"
};
firebase.initializeApp(firebaseConfig);
var ui = new firebaseui.auth.AuthUI(firebase.auth());
var uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            return true;
        },
        uiShown: function() {
            document.getElementById('loader').style.display = 'none';
        }
    },
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    tosUrl: 'tos.html',
    privacyPolicyUrl: 'tos.html'
};
ui.start('#firebaseui-auth-container', uiConfig);