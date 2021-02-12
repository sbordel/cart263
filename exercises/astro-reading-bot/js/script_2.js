"use strict";

let dayOfBirth; 
let monthOfBirth; 
let birthday = monthOfBirth + ' ' + dayOfBirth;

/*
let zodiacProfile = {
    username: "",
    birthday: "",
    zodiacSign: "",
    animal: "",
};*/

//let profileWindow;

let submitOK;

//let zodiacData = undefined;


function preload() {
 zodiacData = loadJSON(`js/json/zodiac-animals.json`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    /*
    let data = JSON.parse(localStorage.getItem(`zodiac-profile-data`));
    if (data !== null) {
       let alert(`plz fill in the form`);
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

let zodiacSign;

function getUserData() {
  username = document.getElementById(`username`).value;
  dayOfBirth =  document.getElementById(`inputDay`).value;
  monthOfBirth = document.getElementById(`inputMonth`).value;

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
    findZodiac();
  };
  zodiacDefined();
}

function findZodiac() {
  if ((monthOfBirth == "march" && dayOfBirth > 20) || (monthOfBirth == "april" && dayOfBirth < 20)) {
  zodiacSign == aries; //ARIES: March 21 – April 19
  }
  else if ((monthOfBirth == "april" && dayOfBirth > 19) || (monthOfBirth == "may" && dayOfBirth < 21 )) {
  zodiacSign == taurus; //TAURUS: April 20 – May 20
  }
  else if ((monthOfBirth == "may" && dayOfBirth > 20) || (monthOfBirth == "june" && dayOfBirth < 21 )) {
  zodiacSign == gemini; //GEMINI: May 21 – June 20
  }
  else if ((monthOfBirth == "june" && dayOfBirth > 20) || (monthOfBirth == "july" && dayOfBirth < 23)) {
  zodiacSign == cancer; //CANCER: June 21 – July 22
  }
  else if ((monthOfBirth == "july" && dayOfBirth > 22) || (monthOfBirth == "august" && dayOfBirth < 23)) {
  zodiacSign == leo; //LEO: July 23 – August 22
  }
  else if ((monthOfBirth == "august" && dayOfBirth > 22) || (monthOfBirth == "september" && dayOfBirth < 23)) {
  zodiacSign == virgo; //VIRGO: August 23 – September 22
  }
  else if ((monthOfBirth == "september" && dayOfBirth > 22) || (monthOfBirth == "october" && dayOfBirth < 23)) {
  zodiacSign == libra; //LIBRA: September 23 – October 22
  }
  else if ((monthOfBirth == "october" && dayOfBirth > 22) || (monthOfBirth == "november" && dayOfBirth < 23)) {
  zodiacSign == scorpio; //SCORPIO: October 23 – November 22
  }
  else if ((monthOfBirth == "november" && dayOfBirth > 22) || (monthOfBirth == "december" && dayOfBirth < 22)) {
  zodiacSign == sagittarius; //SAGITTARIUS: November 23 – December 21
  }
  else if ((monthOfBirth == "december" && dayOfBirth > 21) || (monthOfBirth == "january" && dayOfBirth < 20)) {
  zodiacSign == capricorn; //CAPRICORN: December 22 – January 19
  } 
  else if ((monthOfBirth == "january" && dayOfBirth > 19) || (monthOfBirth == "february" && dayOfBirth < 19)) {
  zodiacSign == aquarius; //AQUARIUS: January 20 – February 18
  } 
  else if ((monthOfBirth == "february" && dayOfBirth > 18) || (monthOfBirth == "march" && dayOfBirth < 21)) { 
  zodiacSign == pisces; //PISCES: February 19 – March 20
  };
  return zodiacSign;
}   


function zodiacDefined() {
  document.getElementById("zodiacResult").innerHTML = zodiacSign
/*
  if zodiacSign(undefined)
    alert('your sign is' + ' ' + zodiacSign);*/
}

/*
function generateZodiacProfile() {
    //zodiacProfile.username = ;
    
    //localStorage.setItem(`zodiac-profile-data`, JSON.stringify(zodiacProfile));
}

function generateProfileWindow(){
  zodiacProfile = `
  username: ${username.name}
  birthday: ${birthday.name}
  zodiac sign: ${zodiacSign.name}
  animal: ${animal.name}`;
  //animalPic: document.getElementById("animal-pic").src = "";
}*/

function draw() {
    /*
    push();
    textFont(`Courier, monospace`);
    textSize(24);
    textAlign(LEFT, TOP);
    fill(255);
    text(zodiacProfile, 100, 100);

    pop();*/
}