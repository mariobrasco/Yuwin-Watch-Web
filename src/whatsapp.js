const form = document.getElementById("form");
const inputs = form.querySelectorAll("input, textarea");
const submitBtn = document.getElementById("submit-btn");

function validateForm() {
  let allFilled = true;
  inputs.forEach((input) => {
    if (!input.value.trim()) {
      allFilled = false;
    }
  });

  submitBtn.disabled = !allFilled;
  submitBtn.classList.toggle("opacity-50", !allFilled);
  submitBtn.classList.toggle("cursor-not-allowed", !allFilled);
}

inputs.forEach((input) => {
  input.addEventListener("input", validateForm);
});

window.addEventListener("DOMContentLoaded", validateForm);

form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah form reload
  sendToWhatsapp();
});

function sendToWhatsapp() {
  let number = "+6285298501576";
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Semua field wajib diisi!");
    return;
  }

  let url = "https://wa.me/" + number + "?text=" + "====Yuwin Watch====" + "%0a" 
  + "Nama : " + name + "%0a" 
  + "Email : " + email + "%0a" 
  + "Pesan : " + "%0a" + message;

  window.open(url, "_blank").focus();
}
