// ======== Theme toggles (shared) ========
function setTheme(theme) {
  const body = document.body;
  if (theme === "dark") {
    body.classList.remove("theme-light");
    body.classList.add("theme-dark");
  } else {
    body.classList.remove("theme-dark");
    body.classList.add("theme-light");
  }
}
function wireThemeButtons() {
  const lightBtn = document.getElementById("themeLight");
  const darkBtn = document.getElementById("themeDark");
  if (lightBtn) lightBtn.addEventListener("click", () => setTheme("light"));
  if (darkBtn) darkBtn.addEventListener("click", () => setTheme("dark"));
}

// ======== Page 1: index.html (userForm) ========
function userForm(e) {
  if (e) e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const address = document.getElementById("address").value.trim();
  const city = document.getElementById("city").value.trim();
  const province = document.getElementById("province").value.trim();

  const membership = document.getElementById("premium").checked
    ? "Premium"
    : document.getElementById("standard").checked
    ? "Standard"
    : "Basic";

  if (!firstName || !lastName || !email || !address || !city || !province) {
    alert("Please fill in all fields.");
    return false;
  }

  const fullName = firstName + " " + lastName;

  const out = [
    "Full Name: " + fullName,
    "Email: " + email,
    "Address: " + address,
    "City: " + city,
    "Province: " + province,
    "Membership: " + membership,
  ].join("\n");

  document.getElementById("output").innerText = out;
  return false;
}

function wireIndexPage() {
  const form = document.getElementById("main-form");
  if (form) {
    form.addEventListener("submit", userForm);
  }
}

// ======== Page 2: excel.html (myExcelFuns) ========
let result; // global container for the final calculation

function myExcelFuns() {
  let numberStr = document.getElementById("numbers").value;
  if (!numberStr || numberStr.trim().length === 0) {
    alert("Please enter space-separated numbers.");
    return false;
  }

  numberStr = numberStr.trim();
  let numberArr = numberStr.split(" ");

  const finalNumericArray = [];
  for (let i = 0; i < numberArr.length; i++) {
    const raw = numberArr[i].trim();
    if (raw === "") continue;
    const num = Number(raw);
    if (Number.isFinite(num)) finalNumericArray.push(num);
  }

  if (finalNumericArray.length === 0) {
    alert("No valid numbers were found. Please check your input.");
    return false;
  }

  if (document.getElementById("sum").checked) {
    result = finalNumericArray.reduce((acc, n) => acc + n, 0);
  } else if (document.getElementById("avg").checked) {
    const total = finalNumericArray.reduce((acc, n) => acc + n, 0);
    result = total / finalNumericArray.length;
  } else if (document.getElementById("max").checked) {
    result = Math.max.apply(null, finalNumericArray);
  } else {
    result = Math.min.apply(null, finalNumericArray);
  }

  document.getElementById("output").innerText = "Result: " + result;
  return false;
}

function wireExcelPage() {
  const calcBtn = document.getElementById("excel-calc");
  if (calcBtn) {
    calcBtn.addEventListener("click", myExcelFuns);
  }
}

// ======== Bootstrap all pages ========
document.addEventListener("DOMContentLoaded", () => {
  wireThemeButtons();
  wireIndexPage();
  wireExcelPage();
});
