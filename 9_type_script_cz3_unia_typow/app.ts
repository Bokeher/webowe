const select:HTMLSelectElement = document.getElementById("pola") as HTMLSelectElement;
const calc = document.getElementById("calculator") as HTMLElement;
const answer = document.getElementById("answer") as HTMLElement;
let number:number = 1;

select.addEventListener("change", () => {
    number = +select.value;
    changeView(number);
    answer.innerHTML = "";
})

changeView(1);

function changeView(index: number) {
    calc.innerHTML = getView(index);
    
}

function getView(type:number) : string {
    let inputs:string = "null";
    switch (type) {
        case 1:
            inputs = `Podaj obwód koła <input type="number" id="bok1" min="0">`;
            break;
        case 2:
            inputs = `Podaj bok kwadratu <input type="number" id="bok1">`;
            break;
        case 3:
            inputs = `Podaj 1 bok prostokąta <input type="number" id="bok1"><br> 
                      Podaj 2 bok prostokąta <input type="number" id="bok2">`;
            break;
        case 4:
            inputs = `Podaj 1 bok trójkąta <input type="number" id="bok1"><br> 
                      Podaj 2 bok trójkąta <input type="number" id="bok2"><br> 
                      Podaj 3 bok trójkąta <input type="number" id="bok3">`;
            break;
        default:
            break;
    }

    const button:string = `<button onclick="calcualte()">Oblicz</button>`;

    return inputs+"<br>"+button;
}

function calcualte() {
    const inputs = document.getElementsByTagName("input") as HTMLCollection;

    let area:number|string = 0;
    const input1 = inputs.item(0) as HTMLInputElement;
    const input2 = inputs.item(1) as HTMLInputElement;
    const input3 = inputs.item(2) as HTMLInputElement;
    let error:boolean = false;

    if(+input1.value <= 0) error = true;

    if(input2 != null) {
        if(+input2.value <= 0) error = true;
    } 

    if(input3 != null) {
        if(+input2.value <= 0) error = true;
    } 

    switch (number) {
        case 1:
            area = calcCircle(+input1.value);
            break;
        case 2:
            area = calcSquare(+input1.value);
            break;
        case 3:
            area = calcRectangle(+input1.value, +input2.value);
            break;
        case 4:
            const side1:number = +input1.value;
            const side2:number = +input2.value;
            const side3:number = +input3.value;

            if(checkIfExist(side1, side2, side3)) area = calcTriangle(side1, side2, side3);
            else area = "Nie istnieje trójkąt o podanych bokach";

            break;
        default:
            break;
    }

    // if(+input1.value <= 0 ||  || +input3.value <= 0) console.log(32);
    
    

    if(!error) answer.innerHTML = `Pole: ${area}`; 
    else answer.innerHTML = `Niepoprawne dane`; 
}

function calcCircle(region:number):number {
    const r:number = region/(2*Math.PI);
    const area:number = Math.PI*Math.pow(r, 2);

    return area;
}

function calcSquare(side:number):number {
    const area:number = side*side;

    return area;
}

function calcRectangle(side1:number, side2:number):number {
    const area:number = side1*side2;

    return area;
}
function calcTriangle(side1:number, side2:number, side3:number):number {
    let p:number = (side1+side2+side3)/2;
    console.log(p);
    
    const area:number = Math.sqrt((p*(p-side1)*(p-side2)*(p-side3)));

    return area;
}

function checkIfExist(a:number, b:number, c:number):boolean {
    if(a+b<c) return false;
    if(a+c<b) return false;
    if(b+c<a) return false;
    return true;
}