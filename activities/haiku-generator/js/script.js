"use strict";

  let haikuLines = {
    fiveSyllables: [
    `would be so fuzzy`,
    `strolling in the sand`,
    `earthworm based diet`,
    `a synthetic feel`,
    `xanthophores sheen`
    ],
    sevenSyllables: [
    `the cutest of axolotls`,
    `with lidless googly black eyes`,
    `a silly walking fishy`,
    `its small vestigial teeth`,
    `head crowned with external gills`
    ]
   };

   /*
   let haikuLines = {
    fiveSyllables: [
      `O, to be a tree`,
      `The cat does not know`,
      `We are all forests`,
      `You have done your best`,
      `They are all gone now`
    ],
    sevenSyllables: [
      `Say the things left unsaid`,
      `Never believe the wind's lies`,
      `The autumn stretches its legs`,
      `Nothing can satisfy you`,
      `They will not come back again`
    ]
  };*/

let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);

setupLines();
addListeners();

function setupLines() {
    line1.innerText = random(haikuLines.fiveSyllables);
    line2.innerText = random(haikuLines.sevenSyllables);
    line3.innerText = random(haikuLines.fiveSyllables);
  }

  function addListeners() {
    line1.addEventListener(`click`, changeLine);
    line2.addEventListener(`click`, changeLine);
    line3.addEventListener(`click`, changeLine);
  }

  function changeLine(event) {
    fadeOut(event.target, 1);
  }

  function setNewLine(element) {
    if (element === line1 || element === line3) {
      // if element is line1 or line3, use 5 syllables
      element.innerText = random(haikuLines.fiveSyllables);
    }
    else {
      // if element is line2, use 7
      element.innerText = random(haikuLines.sevenSyllables);
    }
  }
  
  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
