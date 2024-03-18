// 'use strict';

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('#navbar');

// let sections = document.querySelectorAll('section');
// let navlinks = document.querySelectorAll('nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height){
//             navlinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
//             });
//         }
//     }); // Sluitende haakjes toegevoegd hier
// } // Sluitende accolade toegevoegd hier

// // Remove the duplicate declaration of 'navbar'
// // const navbar = document.querySelector('#navbar');

"use strict";

// Elementen selecteren
const form = document.querySelector("form");
const fullNameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const phoneNumberInput = form.querySelector('input[type="tel"]');
const subjectInput = form.querySelector('input[type="text"]:nth-of-type(2)');
const messageTextArea = form.querySelector("textarea");
const submitButton = form.querySelector('input[type="submit"]');

// Elementen manipuleren (CSS Grid & Basis CSS Animatie)
form.style.display = "grid";
form.style.gridTemplateColumns = "repeat(2, 1fr)";
form.style.gap = "20px";
submitButton.style.transition = "transform 0.2s ease-in-out";

// Formulier valideren
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

  // Gebruik van LocalStorage
  localStorage.setItem("contactFormData", JSON.stringify(formData));
  console.log("Form data saved to LocalStorage");

  // Fetch om data weg schrijven (Async & Await)
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

// JSON manipuleren en weergeven
const storedFormData = JSON.parse(localStorage.getItem("contactFormData"));
if (storedFormData) {
  console.log(`Retrieved from LocalStorage: ${storedFormData}`);
}

// Self executing function to apply initial styles
(function () {
  document.querySelector("#contact h2").style.textAlign = "center";
})();

// Basis CSS Animatie via JavaScript
messageTextArea.addEventListener("focus", () => {
  messageTextArea.style.animation = "pulse 2s infinite";
});

// Define CSS keyframes for animation
const styleSheet = document.createElement("style");
styleSheet.textContent = `
    @keyframes pulse {
        0% { background-color: #fff; }
        50% { background-color: #f0f0f0; }
        100% { background-color: #fff; }
    }
`;

/*menu */
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("active");
  });
});

/*het project */
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
