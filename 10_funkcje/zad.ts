const zaokraglij = (numb:number) => Math.round(numb*100)/100; 
// zad1
const zad1 = (a:number, b:number) => {
    console.log(`${a} - ${b} = ${a-b}`);
    console.log(`${a} * ${b} = ${a*b}`);
    console.log(`${a} / ${b} = ${zaokraglij(a/b)}`);
}
zad1(4, 2);

// zad2
const zad2 = (a:number) => {
    let abs = a;
    if(a < 0) abs = a * -1;

    console.log(`Liczba bezwzględna z liczby ${a}: ${abs}`)
}

zad2(2);
zad2(-3);

// zad3
const numery = [2, 4, 7, 11, 14, 19, 21, 100];

const parzyste = numery.filter(numb => numb % 2 == 0);
const nieParzyste = numery.filter(numb => numb % 2 != 0);

console.log(`Liczby parzyste: ${parzyste.join(", ")}`);
console.log(`Liczby nieparzyste: ${nieParzyste.join(", ")}`);

// zad4
const osoby = ["Marcin", "Jan", "Beata", "Tadeusz", "Teresa"];

const zad4 = (arr:String[]) => {
    const randomNumb = Math.floor(Math.random() * arr.length);
    return arr[randomNumb];
}
zad4(osoby);

// zad5
const getArray = (length:number = 100) => {
    if(length <= 0) return null;

    const arr:number[] = [];
    for(let i = 0; i< length; i++) {
        const randNumb = Math.floor(Math.random() * 100)+1;
        arr.push(randNumb);
    }
    return arr;
}

const arr = getArray(12);
console.log(arr)

// zad6
const sprawdzPodzielnosc5 = (arr:number[]) => {
    const liczacz = arr.filter(a => a % 5 == 0);
    const procent = liczacz.length/arr.length;
    arr.sort((a, b) => a - b);

    console.log(`Otrzymalem tablicę z ${arr.length} liczbami, gdzie najmniejsza liczba to ${arr[0]}, a najwieksza ${arr[arr.length-1]}. W tym liczby podzielne przez 5 to: ${liczacz.join(", ")} czyli ${zaokraglij(procent)}% wszystkich liczb.`)
}

sprawdzPodzielnosc5([3, 2, 4, 5, 6, 10, 12, 13, 15, 20, 21, 5]);