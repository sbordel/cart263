
"use strict";

//let username = document.getElementById("username").value;
let dayOfBirth =  document.getElementById(`inputDay`);
let monthOfBirth = document.getElementById(`inputMonth`).value;

let birthday = monthOfBirth + " " + dayOfBirth;

/*
let zodiacProfile = {
  username: ``,
  birthday: ``,
  zodiacSign: `??`,
  animal: `??`,
}; */

let zodiacData = undefined;

function preload() {
  zodiacData = loadJSON('js/zodiac-animals.json');

    let modal = document.getElementById("popUp");
    modal.style.display = "fixed";

    let closeButton = document.getElementsByClassName("close")[0];
    
    closeButton.onclick = function() {
    modal.style.display = "none";
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let data = JSON.parse(localStorage.getItem(`zodiac-profile-data`));
     if (data !== null) {
       if (username === data.username){
        }
    
        zodiacProfile.username = data.username;
        zodiacProfile.birthday = data.birthday;
        zodiacProfile.zodiacSign = data.zodiacSign;
        zodiacProfile.animal = data.animal;
    }
    else {
        generateZodiacProfile();
    } 
}

function profileSubmitted(){
    document.getElementById("animalInput").innerHTML = "U ARE...." + " " + ${animal};
}

function generateZodiacProfile() {
  zodiacProfile.username = prompt(`plz write a username`);
    
    //let instrument = random(instrumentData.instruments);
    //zodiacProfile.username = `The ${instrument}`;
    //spyProfile.secretWeapon = random(objectData.objects);

    localStorage.setItem(`zodiac-profile-data`, JSON.stringify(zodiacProfile));
}

function profileSubmitted(){
    let profile = `if your zodiac sign was an animal
   
    USERNAME: ${zodiacProfile.username}
    BIRTHDAY: ${zodiacProfile.birthday}
    ZODIAC SIGN: ${zodiacProfile.zodiacSign}
    ANIMAL: ${zodiacProfile.animal}`;

    let hiddenSection = document.getElementsByClassName("hidden-section");
    hiddenSection.style.display = "block";
}

function draw() {
/*
    push();
    textFont(`Times New Roman`);
    textSize(18);
    textAlign(LEFT, TOP);
    fill(0);
    strokeWeight(0.2);
    text(profile, 100, 100);

    pop();*/
}