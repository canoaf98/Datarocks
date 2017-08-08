$(document).ready(function(){
    var user = firebase.auth().currentUser;
    var txtNombre = $("#txtNombre");
    var txtEmail = $("#txtEmail");
    var imgFoto = $("#imgFoto");
    $(".button-collapse").sideNav();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            user.providerData.forEach(function (profile) {
                txtEmail.html(profile.email);
                txtNombre.html(profile.displayName);
                imgFoto.attr("src",profile.photoURL);
                console.log("Sign-in provider: "+profile.providerId);
                console.log("  Provider-specific UID: "+profile.uid);
                console.log("  Name: "+profile.displayName);
                console.log("  Email: "+profile.email);
                console.log("  Photo URL: "+profile.photoURL);
              });
        } 
    });

})
  