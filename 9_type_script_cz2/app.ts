//zad 1
const liczba:number = 13;
if(liczba >= 1 && liczba <= 12) {
    console.log(`Liczba ${liczba} moze byc numerem miesiaca`);
} else console.log(`Liczba ${liczba} nie moze byc numerem miesiaca`);

//zad2
const liczba2:number = 12;
if(liczba2 % 2 == 0) console.log(`Liczba ${liczba2} jest liczba parzysta`);
else console.log(`Liczba ${liczba2} jest liczba nieparzysta`);

//zad3
const dzien:number = 25;
const miesiac:number = 1;
const rok:number = 1988;
const date = new Date();


const dzisiejszyDzien:number = date.getDate();
const dzisiejszyMiesiac:number = date.getMonth()+1;
const dzisiejszyRok:number = date.getFullYear();

const polskieObywatelstwo:boolean = true;

if(polskieObywatelstwo)
    if(rok < dzisiejszyRok-35 || ((rok == (dzisiejszyRok-35) && dzien <= dzisiejszyDzien && miesiac <= dzisiejszyMiesiac))) {
        console.log(`Mozesz sie ubiegac o fotel prezydenta`);
    }
else console.log(`Nie mozesz sie ubiegac o fotel prezydenta`);

// console.log(mozeBycPrezydentem(1, 2, 2022, true));
// console.log(mozeBycPrezydentem(1, 2, 1988, true));
// console.log(mozeBycPrezydentem(1, 1, 1989, true));
// console.log(mozeBycPrezydentem(25, 1, 1989, true));
// console.log(mozeBycPrezydentem(1, 2, 2022));

// function mozeBycPrezydentem(dzien:number, meisiac:number, rok:number, polskieObywatelstwo:boolean) {
//     if(!polskieObywatelstwo) return false;
//     if(rok < dzisiejszyRok-35) return true;
//     if(rok == (dzisiejszyRok-35) && dzien <= dzisiejszyDzien && miesiac <= dzisiejszyMiesiac) return true;
//     return false;
// }

//zad4
console.log(`Cena trasy 10km: ${wylicz(10)}`);
console.log(`Cena trasy 20km: ${wylicz(20)}`);
console.log(`Cena trasy 30km: ${wylicz(30)}`);
console.log(`Cena trasy 40km: ${wylicz(40)}`);
console.log(`Cena trasy 50km: ${wylicz(50)}`);


function wylicz(dlugoscTrasy:number) {
    if(dlugoscTrasy <= 15) return 3;
    if(dlugoscTrasy <= 40) return 1.5+dlugoscTrasy*0.2;
    return 1+dlugoscTrasy*0.1;
}