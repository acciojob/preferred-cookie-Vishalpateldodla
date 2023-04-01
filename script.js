//your JS code here. If required.
// Get the form and its input elements
const preferencesForm = document.getElementById("preferences-form");
const fontsizeInput = document.getElementById("fontsize");
const fontcolorInput = document.getElementById("fontcolor");

// Set the initial values of the input elements based on the cookies
fontsizeInput.value = getCookie("fontsize") || "16";
fontcolorInput.value = getCookie("fontcolor") || "#000000";

// Set the font size and color based on the cookies
document.body.style.fontSize = getCookie("fontsize") || "16px";
document.body.style.color = getCookie("fontcolor") || "#000000";

// When the form is submitted, set the cookies and update the styles
preferencesForm.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input elements
  const fontsize = fontsizeInput.value + "px";
  const fontcolor = fontcolorInput.value;

  // Set the cookies with the input values
  setCookie("fontsize", fontsize, 365);
  setCookie("fontcolor", fontcolor, 365);

  // Update the font size and color
  document.body.style.fontSize = fontsize;
  document.body.style.color = fontcolor;
});

// Cookie utility functions

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}
