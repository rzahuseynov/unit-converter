let btnEl = document.getElementById("btn-el");
let inputEl = document.getElementById("input-el");
let lengthEl = document.getElementById("length-p");
let volumeEl = document.getElementById("volume-p");
let massEl = document.getElementById("mass-p");

let meterFeetRatio = 3.281;
let literGallonRatio = 0.264;
let kilogramPoundRatio = 2.204;

function convert() {
    let q = Number(inputEl.value);
    if (isNaN(q)) alert("Please enter a number"); // exception handling

    let m2F = x2Y("length", "forward", q).toFixed(3);
    let f2M = x2Y("length", "back", q).toFixed(3);
    let l2R = x2Y("volume", "forward", q).toFixed(3);
    let r2L = x2Y("volume", "back", q).toFixed(3);
    let k2P = x2Y("mass", "forward", q).toFixed(3);
    let p2K = x2Y("mass", "back", q).toFixed(3);

    lengthEl.textContent = `${q} meters = ${m2F} feet | ${q} feet = ${f2M} meters`;
    volumeEl.textContent = `${q} liters = ${l2R} gallons | ${q} gallons = ${r2L} liters`;
    massEl.textContent = `${q} kilos = ${k2P} pounds | ${q} pounds = ${p2K} kilos`;
}

btnEl.addEventListener('click', convert);

function x2Y(type, direction, quantity) {
    if (type == "length") {
        if (direction == "forward") return quantity * meterFeetRatio;
        else return quantity / meterFeetRatio;
    }
    else if (type == "volume") {
        if (direction == "forward") return quantity * literGallonRatio;
        else return quantity / literGallonRatio;
    }
    else {
        if (direction == "forward") return quantity * kilogramPoundRatio;
        else return quantity / kilogramPoundRatio;
    }
}