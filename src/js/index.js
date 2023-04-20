"use strict";
import "../sass/main.scss";

const accordion = document.querySelector(".accordions");
//dark mode veriables
const darkModeToggle = document.getElementById("dark-mode-checkbox");
const root = document.documentElement;

accordion.addEventListener("click", function (event) {
  const wrapper = event.target.closest(".question-wrapper");
  if (!wrapper) return;

  const innerElements = Array.from(wrapper.childNodes);
  const arrowIcon = innerElements.find((el) => el.className === "arrow-icon");
  const ques = innerElements.find((el) => el.className === "question");
  const ans = wrapper.nextElementSibling;

  if (ans.style.maxHeight) {
    ans.style.maxHeight = null;
    arrowIcon.style.transform = "rotate(0deg)";
    ans.style.marginBottom = "0";
    ques.style.fontWeight = "400";
  } else {
    ans.style.maxHeight = `${ans.scrollHeight}px`;
    arrowIcon.style.transform = "rotate(180deg)";
    ans.style.marginBottom = "1rem";
    ques.style.fontWeight = "700";
  }
});

//dark mode feature
const darkMode = function () {
  if (darkModeToggle.checked === true) {
    root.classList.add("dark-mode");
  } else {
    root.classList.remove("dark-mode");
  }
};

darkModeToggle.addEventListener("change", darkMode);
window.addEventListener("load", darkMode);
