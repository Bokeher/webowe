const subjects = ["matematyka", "j polski", "j angielski", "j niemiecki", "fizyka", "chemia", "biologia", "historia", "wos", "wf"]

enum weight {
    'aktywność' = 1,
    'praca na lekcji' = 2,
    'kartkówka' = 3,
    'projekt' = 4,
    'sprawdzian' = 5
}

enum gradesNames {
    'niedostateczny' = 1,
    'dopuszczający' = 2,
    'dostateczny' = 3,
    'dobry' = 4,
    'bardzo dobry' = 5,
    'celuający' = 6
}

type gradeType = [string, string, number, number];

// czesc 1
function zad1() {
    const input = document.getElementById("zad1Input") as HTMLInputElement;
    const val:number = +input.value;
    let grades2:gradeType[] = [];

    if(val <= 0) return;

    for (let i = 0; i < val; i++) {
        const randomGrade:number = random(1, 6);
        const randomWeight:number = random(1, 5);

        grades2.push([weight[randomWeight], subjects[2], randomWeight, randomGrade]);    
    }

    //wyswietlanie
    const table = document.getElementById("tabZad1") as HTMLTableElement;
    table.innerHTML = `<tr>
        <th>Przedmiot</th>
        <th>Ocena</th>
    </tr>`
    grades2.forEach(elem => {
        let row = 
        `<tr>
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
    const table = document.getElementById("tabZad2") as HTMLTableElement;
    let grades:gradeType[] = [];
    let averageArray:number[] = [];

    for (let i = 0; i < 4; i++) {
        const randomGrade:number = random(1, 6);
        const randomWeight:number = random(1, 5);

        grades.push([weight[randomWeight], subjects[3], randomWeight, randomGrade]);  
    }

    // wyswietlanie
    table.innerHTML = 
    `<tr>
        <th>Przedmiot</th>
        <th>Kategoria</th>
        <th>Waga</th>
        <th>Ocena</th>
    </tr>`
    grades.forEach(elem => {
        let row = 
        `<tr>
            <td>${elem[1]}</td> 
            <td>${elem[0]}</td>
            <td>${elem[2]}</td>
            <td>${elem[3]}</td>
        </tr>`;
        table.innerHTML += row;
    });

    //srednia
    const lastGrade = grades[grades.length-1]; 
    let sum = 0;
    let sumOfWeight = 0
    let average:number = 0;

    grades.forEach(elem => {
        sum += elem[3]*elem[2]; 
        sumOfWeight += elem[2];

        if(elem == lastGrade) {
            average = Math.round((sum/sumOfWeight)*100)/100;
        }
    });

    const span = document.getElementById("sredniaZad2") as HTMLElement;
    span.innerText = ""+average;
}

//czesc 3
zad3();
function zad3() {
    // losowanie ocen
    let grades:gradeType[] = [];
    for (let i = 0; i < subjects.length; i++) {
        const gradeNumb:number = random(3, 10);
        let j = 0
        for(j = 0; j < gradeNumb; j++) {
            const randomGrade:number = random(1, 6);
            const randomWeight:number = random(1, 5);

            grades.push([weight[randomWeight], subjects[i], randomWeight, randomGrade]);
        }
    }

    //wyswietlenie ocen w tabeli
    const table = document.getElementById("oceny") as HTMLTableElement;
    grades.forEach(elem => {
        let row = 
        `<tr>
            <td>${elem[1]}</td> 
            <td>${elem[0]}</td>
            <td>${elem[2]}</td>
            <td>${elem[3]}</td>
        </tr>`;
        table.innerHTML += row;
    });

    //obliczanie srednich z kazdego przedmiotu
    let sum:number = 0;
    let sumOfWeight:number = 0;
    let lastCategory:string = subjects[0];
    let averageArray:number[] = [];
    const lastGrade:gradeType = grades[grades.length-1];

    grades.forEach(elem => {
        if(lastCategory == elem[1]) {
        sum += elem[3]*elem[2]; 
        sumOfWeight += elem[2];
        }  
        if(lastCategory != elem[1] || elem == lastGrade) {
            const average:number = Math.round((sum/sumOfWeight)*100)/100;
            averageArray.push(average);
        }
        lastCategory = elem[1];    
    });


    //wyswietlanie srednich z kazdego przedmiotu
    const averageTable = document.getElementById("srednia") as HTMLTableElement;
    for (let i = 0; i < averageArray.length; i++) {
        const average = averageArray[i];
        const lessonName = subjects[i];

        averageTable.innerHTML += `<tr><td>${lessonName}</td><td>${average}</td></tr>`;
    }

    // liczenie sredniej wszystkich przedmiotow
    let sum2 = 0;
    averageArray.forEach(average => {
        sum2 += average
    });
    const averageOfAllSubjects = Math.round(sum2/averageArray.length*100)/100;
    const averageSpan = document.getElementById("sredniaWszystkich") as HTMLElement;
    averageSpan.innerText = ""+averageOfAllSubjects;

}

//liczenie losowej liczby z zakresu <min; max>
function random(min:number, max:number):number {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
