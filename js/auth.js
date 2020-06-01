(function (w, d) {
    firebase.auth().onAuthStateChanged(function (user) {
        if (!user) {
            w.location.replace("login.html");
        }
    });
})(window, document);
