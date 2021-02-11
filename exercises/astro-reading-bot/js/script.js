"use strict";

let dayOfBirth; 
let monthOfBirth; 
let birthday = monthOfBirth + ` ` + dayOfBirth ;

let username;

let profileWindow;


let zodiacProfile = {
    username: `?`,
    birthday: `?`,
    zodiacSign: `?`,
    animal: `?`,
};

let zodiacData = undefined;

let submitOK = generateZodiacProfile();

function preload() {
    zodiacData = loadJSON(`js/json/zodiac-animals.json`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    /*
    let data = JSON.parse(localStorage.getItem(`zodiac-profile-data`));
    if (data !== null) {
       let username = prompt(`what is your username?`);
       if (username === data.username){
        }
        zodiacProfile.username = data.username;
        zodiacProfile.birthday = data.birthday;
        zodiacProfile.zodiacSign = data.zodiacSign;
        zodiacProfile.animal = data.animal;
    }
    else {
        generateZodiacProfile();
    }*/
}

function getUserData() {
  username = document.getElementById(`username`).value;
  dayOfBirth =  document.getElementById(`inputDay`).value;
  monthOfBirth = document.getElementById(`inputMonth`).value;
  submitOK = `true`;

  if (username == ``) {
    alert(`plz fill in ur username`);
    submitOK = `false`;
  }
  if (isNaN(dayOfBirth) || dayOfBirth < 1 || dayOfBirth > 31) {
    alert(`plz write in the day of your birth as a number between 1 and 31`);
    submitOK = `false`;
  }
  if (monthOfBirth == `--`) {
    alert(`plz select a month`);
    submitOK = `false`;
  }
  if (submitOK == `false`) {
    return false;
  }
  if (submitOK == `true`){
    generateZodiacProfile();
  };
}

function generateZodiacProfile() {
    //zodiacProfile.username = ;
    


    //localStorage.setItem(`zodiac-profile-data`, JSON.stringify(zodiacProfile));
}

function draw() {

    //push();
    //profileWindow = document.getElementById(`window`);
    //pop();

    /*
    username: ${username.name}
    birthday: ${birthday.name}
    zodiac sign: ${zodiacSign.name}
    animal: ${animal.name}`;
    push();
    textFont(`Courier, monospace`);
    textSize(24);
    textAlign(LEFT, TOP);
    fill(255);
    text(zodiacProfile, 100, 100);

    pop();*/
}