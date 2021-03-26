
// Varibiles
const form = document.forms[0];
async function firebaseConfig() {
  try {
    let request = await fetch("config.json")
    let data = await request.json();
    return data
  } catch (error) {
    console.log(error.message);
  }
}

function addData(name, email, comment) {
  let db = firebase.firestore()
  return db.collection("contacts").doc(name + " " + new Date().toTimeString()).set({
    name,
    email,
    comment
  })
}

document.addEventListener("DOMContentLoaded", () => {
  firebaseConfig()
    .then(config => {
      firebase.initializeApp(config);

      form.addEventListener("submit", e => {
        e.preventDefault()
        let name = form.name.value;
        let email = form.email.value;
        let comment = form.message.value;
        addData(name, email, comment)
          .then(() => {
            form.name.value = "";
            form.email.value = "";
            form.message.value = "";
            form.submit.innerHTML = "Sent successfully";
            form.submit.disabled = true;
            form.submit.title = "Your massage sent successfully";
          })
          .catch(err => {
            console.log(err);
          })

      })
    })
})
