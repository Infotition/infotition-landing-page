import "../css/style.css";

const emailIn = document.querySelector("#emailInput");
const registerBtn = document.querySelector("#registerBtn");

//* -----------------------------------------------------------------------------
//* EMAIL VERIFICATION
//* -----------------------------------------------------------------------------

function validEmail(email) {
  if (email === "") return true;
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function handleChange() {
  emailIn.classList.remove("invalid-email");

  registerBtn.classList.remove("btn-disabled");
  registerBtn.classList.add("btn-register");

  if (!validEmail(emailIn.value)) {
    emailIn.classList.add("invalid-email");
    registerBtn.classList.add("btn-disabled");
    registerBtn.classList.remove("btn-register");
  }
}

emailIn.addEventListener("keydown", handleChange);
emailIn.addEventListener("paste", handleChange);
emailIn.addEventListener("change", handleChange);
emailIn.addEventListener("input", handleChange);

//* -----------------------------------------------------------------------------
//* REGISTER NEWSLETTER
//* -----------------------------------------------------------------------------

registerBtn.addEventListener("click", () => {
  if (validEmail(emailIn.value)) {
    console.log(`registered mail: ${emailIn.value}`);
  }
});
