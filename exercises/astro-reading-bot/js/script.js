"use strict";

let spyProfile = {
    name: `?`,
    alias: `?`,
    secretWeapon: `?`,
    password: `?`,
};

let instrumentData = undefined;
let objectData = undefined;
let tarotData = undefined;

function preload() {
    zodiacData = loadJSON(`json/zodiac-animals.json`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
    if (data !== null) {
       let password = prompt(`what is your password?`);
       if (password === data.password){
        }
        spyProfile.name = data.name;
        spyProfile.alias = data.alias;
        spyProfile.secretWeapon = data.secretWeapon;
        spyProfile.password = data.password;
    }
    else {
        generateSpyProfile();
    }
}

function generateSpyProfile() {
    spyProfile.name = prompt(`what is your name.`);
    
    let instrument = random(instrumentData.instruments);
    spyProfile.alias = `The ${instrument}`;
    spyProfile.secretWeapon = random(objectData.objects);

    let card = random(tarotData.tarot_interpretations);
    spyProfile.password = random(card.keywords);

    localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
}

function draw() {
    background(0);

    let profile = `** SPY PROFILE! DO NOT DISTRIBUTE! **

    Name: ${spyProfile.name}
    Alias: ${spyProfile.alias}
    Secret Weapon: ${spyProfile.secretWeapon}
    Password: ${spyProfile.password}`;

    push();
    textFont(`Courier, monospace`);
    textSize(24);
    textAlign(LEFT, TOP);
    fill(255);
    text(profile, 100, 100);

    pop();
}