"use strict";

let dayOfBirth; 
let monthOfBirth; 
let birthday = monthOfBirth + ` ` + dayOfBirth ;

let username;


let zodiacProfile = {
    username: `?`,
    birthday: `?`,
    zodiacSign: `?`,
    animal: `?`,
};

let zodiacData = undefined;

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

function getMonth() {
    document.getElementById("inputMonth").innerHTML = "Hello World";

  usernname = document.getElementById("username").value;
  dayOfBirth =  document.getElementById("inputDay").value;
  monthOfBirth = document.getElementById("inputMonth").value;
  submitOK = "true";
  }

/*
function generateZodiacProfile() {
    zodiacProfile.username = prompt(`what is your username?`);
    


    localStorage.setItem(`zodiac-profile-data`, JSON.stringify(zodiacProfile));
}*/

function draw() {
    background(0);
    /*let profile = ` ; - )

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