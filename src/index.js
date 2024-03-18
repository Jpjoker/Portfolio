"use strict";

// Elementen selecteren GOOD
const form = document.querySelector("form");
const fullNameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const phoneNumberInput = form.querySelector('input[type="tel"]');
const subjectInput = form.querySelector('input[type="text"]:nth-of-type(2)');
const messageTextArea = form.querySelector("textarea");
const submitButton = form.querySelector('input[type="submit"]');

// Elementen manipuleren (CSS Grid & Basis CSS Animatie) GOOD
form.style.display = "grid";
form.style.gridTemplateColumns = "repeat(2, 1fr)";
form.style.gap = "20px";
submitButton.style.transition = "transform 0.2s ease-in-out";

// Formulier valideren GOOD
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    fullName: fullNameInput.value,
    email: emailInput.value,
    phoneNumber: phoneNumberInput.value,
    subject: subjectInput.value,
    message: messageTextArea.value,
  };

  if (!formData.fullName || !formData.email || !formData.message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Gebruik van LocalStorage GOOD
  localStorage.setItem("contactFormData", JSON.stringify(formData));
  console.log("Form data saved to LocalStorage");

  // Fetch om data optehalen  (Async & Await) TODO
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
      {
        method: "POST",
        mode: "no-cors", // This is important for CORS policy
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // gebruik hier een callback function TODO
    if (!response.ok) throw new Error("Network response was not ok.");
    console.log("Form submitted successfully");
    alert("Thank you for your message!");
  } catch (error) {
    console.error("Error:", error);
    // template literals ;D
    alert(`There was a problem with your submission: ${error.message}`);
  }
});

// JSON manipuleren en weergeven  GOOD
const storedFormData = JSON.parse(localStorage.getItem("contactFormData"));
if (storedFormData) {
  console.log(`Retrieved from LocalStorage: ${storedFormData}`);
}

// Self executing function to apply initial styles  GOOD
(function () {
  document.querySelector("#contact h2").style.textAlign = "center";
})();

// Basis CSS Animatie via JavaScript GOOD
messageTextArea.addEventListener("focus", () => {
  messageTextArea.style.animation = "pulse 2s infinite";
});

// Define CSS keyframes for animation GOOD
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes pulse {
        0% { background-color: #fff; }
        50% { background-color: #f0f0f0; }
        100% { background-color: #fff; }
    }
`;

/*menu  GOOD */
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

/*het project  GOOD*/
document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with class 'btn' that are intended for viewing projects
  const seeProjectBtns = document.querySelectorAll(".btn.see-project-btn");

  // Add click event listener to each button
  seeProjectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Redirect to the URL specified in the data-url attribute of the clicked button
      window.location.href = btn.getAttribute("data-url");
    });
  });
});

// Desturcturing TODO
// Assuming formData is defined as before in your form submission logic
const { fullName, email, phoneNumber, subject, message } = formData;
console.log(fullName, email, phoneNumber, subject, message);

// Spread & Rest Operator todo
const additionalInfo = { submissionDate: new Date().toISOString() };
const fullFormData = { ...formData, ...additionalInfo };
console.log(fullFormData);

// Iteration Over an Array TODO
// Assuming you have a data-name attribute on each project card
const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const projectName = card.getAttribute("data-name"); // Assuming this attribute exists
  console.log(`Project Name: ${projectName}`);
});

// Callback function TODO

// Promise TODO
