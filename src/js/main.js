"use strict";

const accordion = document.querySelector(".accordions");

accordion.addEventListener("click", function (event) {
  const wrapper = event.target.closest(".question-wrapper");
  if (!wrapper) return;

  const arrowIcon = wrapper.childNodes[1];
  const ques = wrapper.childNodes[3];
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
