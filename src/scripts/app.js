const sendForm = function (event) {
  alert("Poprawnie wysłano formularz");
  event.preventDefault();
};

const form = document.querySelector(".form");

form.addEventListener("submit", sendForm);
