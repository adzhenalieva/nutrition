(function (w, d) {
    const uiConfig = {
        signInSuccessUrl: 'article.html',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
    };

    const ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);

    const user = firebase.auth().currentUser;
    let credential;

// Prompt the user to re-provide their sign-in credentials

    user.reauthenticateWithCredential(credential).then(function() {
        console.log('here');
    }).catch(function(error) {
        // An error happened.
    });
})(window, document);
