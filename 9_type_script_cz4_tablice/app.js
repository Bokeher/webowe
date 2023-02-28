"use strict";
//zad 2.5
const arr = ["jabłko", "arbuz", "banan", "gruszka"];
const span = document.getElementById("array");
//a
function getLength() {
    const length = document.getElementById("length");
    length.innerText = `Długość tablicy: ${arr.length}`;
}
//b
function sortArray() {
    arr.sort();
}
//c
function addElement() {
    arr.push("ananas");
}
//d
function deleteFirstElem() {
    arr.shift();
}
//e
function deleteLastElem() {
    arr.pop();
}
//f
function addFirstElem() {
    arr.unshift("ananas");
}
//g
function reverseOrder() {
    arr.reverse();
}
//bonus
function everySecondSignUpperCassed() {
    for (let j = 0; j < arr.length; j++) {
        const elem = arr[j];
        for (let i = 1; i < elem.length; i += 2) {
            const upperCassed = elem[i].toUpperCase();
            arr[j] = arr[j].substring(0, i) + upperCassed + elem.substring(i + 1);
            console.log(upperCassed);
        }
    }
}
// 2.6
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        refreshArray();
    });
}
function refreshArray() {
    let res = "";
    arr.forEach(elem => {
        res += `${elem}, `;
    });
    span.innerText = `Tablica: ${res}`;
}
refreshArray();
//2.7
const elem = document.getElementById("res");
const arr2 = ["marchew", "burak", "pietruszka", "kalafior"];
let arr3 = [];
function concat() {
    arr3 = arr.concat(arr2);
    showRes();
}
function addArrays() {
    elem.innerText = "Nie da się dodac tablic do siebie";
}
function concatWithExpandingOperator() {
    arr3 = [...arr, ...arr2];
    showRes();
}
function showRes() {
    elem.innerText = arr3.join(", ");
}
