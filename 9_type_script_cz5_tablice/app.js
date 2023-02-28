"use strict";
const subjects = ["matematyka", "j polski", "j angielski", "j niemiecki", "fizyka", "chemia", "biologia", "historia", "wos", "wf"];
var weight;
(function (weight) {
    weight[weight["aktywno\u015B\u0107"] = 1] = "aktywno\u015B\u0107";
    weight[weight["praca na lekcji"] = 2] = "praca na lekcji";
    weight[weight["kartk\u00F3wka"] = 3] = "kartk\u00F3wka";
    weight[weight["projekt"] = 4] = "projekt";
    weight[weight["sprawdzian"] = 5] = "sprawdzian";
})(weight || (weight = {}));
var gradesNames;
(function (gradesNames) {
    gradesNames[gradesNames["niedostateczny"] = 1] = "niedostateczny";
    gradesNames[gradesNames["dopuszczaj\u0105cy"] = 2] = "dopuszczaj\u0105cy";
    gradesNames[gradesNames["dostateczny"] = 3] = "dostateczny";
    gradesNames[gradesNames["dobry"] = 4] = "dobry";
    gradesNames[gradesNames["bardzo dobry"] = 5] = "bardzo dobry";
    gradesNames[gradesNames["celuaj\u0105cy"] = 6] = "celuaj\u0105cy";
})(gradesNames || (gradesNames = {}));
// czesc 1
function zad1() {
    const input = document.getElementById("zad1Input");
    const val = +input.value;
    let grades2 = [];
    if (val <= 0)
        return;
    for (let i = 0; i < val; i++) {
        const randomGrade = random(1, 6);
        const randomWeight = random(1, 5);
        grades2.push([weight[randomWeight], subjects[2], randomWeight, randomGrade]);
    }
    //wyswietlanie
    const table = document.getElementById("tabZad1");
    table.innerHTML = `<tr>
        <th>Przedmiot</th>
        <th>Ocena</th>
    </tr>`;
    grades2.forEach(elem => {
        let row = `<tr>
            <td>${elem[1]}</td> 
            <td>${elem[3]}</td>
        </tr>`;
        table.innerHTML += row;
    });
}
//czesc 2
// losowanie
zad2();
function zad2() {
    const table = document.getElementById("tabZad2");
    let grades = [];
    let averageArray = [];
    for (let i = 0; i < 4; i++) {
        const randomGrade = random(1, 6);
        const randomWeight = random(1, 5);
        grades.push([weight[randomWeight], subjects[3], randomWeight, randomGrade]);
    }
    // wyswietlanie
    table.innerHTML =
        `<tr>
        <th>Przedmiot</th>
        <th>Kategoria</th>
        <th>Waga</th>
        <th>Ocena</th>
    </tr>`;
    grades.forEach(elem => {
        let row = `<tr>
            <td>${elem[1]}</td> 
            <td>${elem[0]}</td>
            <td>${elem[2]}</td>
            <td>${elem[3]}</td>
        </tr>`;
        table.innerHTML += row;
    });
    //srednia
    const lastGrade = grades[grades.length - 1];
    let sum = 0;
    let sumOfWeight = 0;
    let average = 0;
    grades.forEach(elem => {
        sum += elem[3] * elem[2];
        sumOfWeight += elem[2];
        if (elem == lastGrade) {
            average = Math.round((sum / sumOfWeight) * 100) / 100;
        }
    });
    const span = document.getElementById("sredniaZad2");
    span.innerText = "" + average;
}
//czesc 3
zad3();
function zad3() {
    // losowanie ocen
    let grades = [];
    for (let i = 0; i < subjects.length; i++) {
        const gradeNumb = random(3, 10);
        let j = 0;
        for (j = 0; j < gradeNumb; j++) {
            const randomGrade = random(1, 6);
            const randomWeight = random(1, 5);
            grades.push([weight[randomWeight], subjects[i], randomWeight, randomGrade]);
        }
    }
    //wyswietlenie ocen w tabeli
    const table = document.getElementById("oceny");
    grades.forEach(elem => {
        let row = `<tr>
            <td>${elem[1]}</td> 
            <td>${elem[0]}</td>
            <td>${elem[2]}</td>
            <td>${elem[3]}</td>
        </tr>`;
        table.innerHTML += row;
    });
    //obliczanie srednich z kazdego przedmiotu
    let sum = 0;
    let sumOfWeight = 0;
    let lastCategory = subjects[0];
    let averageArray = [];
    const lastGrade = grades[grades.length - 1];
    grades.forEach(elem => {
        if (lastCategory == elem[1]) {
            sum += elem[3] * elem[2];
            sumOfWeight += elem[2];
        }
        if (lastCategory != elem[1] || elem == lastGrade) {
            const average = Math.round((sum / sumOfWeight) * 100) / 100;
            averageArray.push(average);
        }
        lastCategory = elem[1];
    });
    //wyswietlanie srednich z kazdego przedmiotu
    const averageTable = document.getElementById("srednia");
    for (let i = 0; i < averageArray.length; i++) {
        const average = averageArray[i];
        const lessonName = subjects[i];
        averageTable.innerHTML += `<tr><td>${lessonName}</td><td>${average}</td></tr>`;
    }
    // liczenie sredniej wszystkich przedmiotow
    let sum2 = 0;
    averageArray.forEach(average => {
        sum2 += average;
    });
    const averageOfAllSubjects = Math.round(sum2 / averageArray.length * 100) / 100;
    const averageSpan = document.getElementById("sredniaWszystkich");
    averageSpan.innerText = "" + averageOfAllSubjects;
}
//liczenie losowej liczby z zakresu <min; max>
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
