const weatherForm = document.querySelector("form");
const searchInput = document.querySelector("input");
const messageOne = document.getElementById("messageOne");
const messageTwo = document.getElementById("messageTwo");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();
  const location = searchInput.value;

  messageOne.innerHTML = "Loading... weather forecast";
  messageTwo.innerHTML = "";

  fetch("/weather?address=" + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        messageOne.innerHTML = data.error;
      } else {
        messageOne.innerHTML = data.location;
        messageTwo.innerHTML = data.forecast;
      }
    });
  });
  weatherForm.reset();
});
