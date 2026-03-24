
// Contact form with Firebase
const form = document.forms[0];

const firebaseConfig = {
  apiKey: "AIzaSyD_tUiKcmVDCjiGi0Pdn7mFXiYPMdBHYjs",
  authDomain: "portfolio-forum.firebaseapp.com",
  projectId: "portfolio-forum",
  storageBucket: "portfolio-forum.appspot.com",
  messagingSenderId: "106011696265",
  appId: "1:106011696265:web:59b09ae558783c054dba58",
  measurementId: "G-RKPRZNL7E1"
};

function addData(name, email, comment) {
  var db = firebase.firestore();
  return db.collection("contacts").doc(name + " " + new Date().toTimeString()).set({
    name: name,
    email: email,
    comment: comment
  });
}

document.addEventListener("DOMContentLoaded", function() {
  if (typeof firebase === 'undefined') return;
  firebase.initializeApp(firebaseConfig);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var name = form.name.value;
    var email = form.email.value;
    var comment = form.message.value;
    addData(name, email, comment)
      .then(function() {
        form.name.value = "";
        form.email.value = "";
        form.message.value = "";
        form.submit.innerHTML = "Sent successfully";
        form.submit.disabled = true;
        form.submit.title = "Your message was sent successfully";
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});
