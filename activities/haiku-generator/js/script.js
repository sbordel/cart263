"use strict";

  let haikuLines = {
    fiveSyllableLines: [
    `would be so fuzzy`,
    `strolling in the sand`,
    `earthworm based diet`,
    `a synthetic feel`,
    `xanthophores sheen`
    ],

    sevenSyllableLines: [
    `the cutest of axolotls`,
    `with lidless googly black eyes`,
    `a silly walking fishy`,
    `its small vestigial teeth`,
    `head crowned with external gills`
    ]
   }

let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);

function setupLines() {
    line1.innerText = random(haikuLines.fiveSyllables);
    line2.innerText = random(haikuLines.sevenSyllables);
    line3.innerText = random(haikuLines.fiveSyllables);
  }
  
function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
