const contentEl = document.getElementById("content");
const formEl = document.getElementById("form");
const editBtn = document.getElementById("button1");
const submitBtn = document.getElementById("button3");

formEl.style.display = "none";

editBtn.addEventListener("click", function (){
  contentEl.style.display = "none";
  formEl.style.display = "block";
});

submitBtn.addEventListener("click", function (){
  contentEl.style.display = "block";
  formEl.style.display = "none";
});

document.getElementById("button3").addEventListener("click", handleSubmit);
document
  .getElementById("changeButton")
  .addEventListener("click", handleChangeButton);

function handleSubmit() {
  const nameValue = document.getElementById("nameInput").value;
  const roleValue = document.getElementById("roleInput").value;
  const availabilityvalue = document.getElementById("availabilityInput").value;
  const ageValue = document.getElementById("ageInput").value;
  const locationValue = document.getElementById("locationInput").value;
  const yearsValue = document.getElementById("yearsInput").value;
  const emailValue = document.getElementById("emailInput").value;

  document.getElementById("name").innerHTML = nameValue;
  document.getElementById("role").innerHTML = roleValue;
  document.getElementById("availability").innerText = availabilityvalue;
  document.getElementById("age").innerText = ageValue;
  document.getElementById("location").innerText = locationValue;
  document.getElementById("years").innerText = yearsValue;
  document.getElementById("email").innerText = emailValue;
}