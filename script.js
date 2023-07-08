const carouselText = [
  { text: "Software Developer", color: "red" },
  { text: "Frontend Developer", color: "orange" },
  { text: "Learner", color: "yellow" },
];

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
  $(eleRef).css("background-color", "black");
  $(eleRef).css("text-decoration", "underline");
}

$(document).ready(async function () {
  await typeSentence("Hi! I am a... ", "#intro-item");

  carousel(carouselText, "#feature-text");
});
