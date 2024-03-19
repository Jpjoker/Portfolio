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

  // Fetch om data optehalen (Async & Await) script google erin zetten GOOD
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/jouw-id/exec",
      {
        method: "POST",
        mode: "no-cors", // This is important for CORS policy
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // gebruik hier een callback function toevoegen TODO
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

/*het project kunt ge altijd uw data-url oproepen  GOOD*/
document.addEventListener("DOMContentLoaded", function () {
  // Select all buttons with class 'btn' that are intended for viewing projects
  const seeProjectBtns = document.querySelectorAll(".btn.see-project-btn");

  seeProjectBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Redirect to the URL specified in the data-url attribute of the clicked button
      window.location.href = btn.getAttribute("data-url");
    });
  });
});

// play aka muziek GOOD
document.addEventListener("DOMContentLoaded", function () {
  const tracks = [
    { id: 1, path: "audio/muziek.mp3", name: "Track 1" },
    { id: 2, path: "audio/muziek2.mp3", name: "Track 2" },
    { id: 3, path: "audio/muziek3.mp3", name: "Track 3" },
    { id: 4, path: "audio/muziek4.mp3", name: "Track 4" },
    { id: 5, path: "audio/muziek5.mp3", name: "Track 5" },
  ];

  let currentTrackIndex = 0;
  let isPlaying = false;
  let audio = new Audio();

  function togglePlayStop() {
    if (!isPlaying) {
      playMusic().then(() => {
        document.getElementById("playStopButton").textContent = "Pause";
      });
    } else {
      audio.pause();
      isPlaying = false;
      document.getElementById("playStopButton").textContent = "Play";
    }
  }

  function playMusic() {
    return new Promise((resolve, reject) => {
      if (audio.src !== tracks[currentTrackIndex].path) {
        audio.src = tracks[currentTrackIndex].path;
      }
      audio.play();
      isPlaying = true;
      resolve("Muziek speelt.");
      audio.onended = function () {
        isPlaying = false;
        document.getElementById("playStopButton").textContent = "Play";
      };
      audio.onerror = () => reject("Fout bij het laden van de muziek.");
    });
  }

  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    if (isPlaying) {
      playMusic();
    }
  }

  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    if (isPlaying) {
      playMusic();
    }
  }

  document
    .getElementById("playStopButton")
    .addEventListener("click", togglePlayStop);
  document.getElementById("nextButton").addEventListener("click", nextTrack);
  document.getElementById("prevButton").addEventListener("click", prevTrack);
});
