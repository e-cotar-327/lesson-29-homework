/*
Să revenim la Mark și Vasile comparându-și BMI-urile! De data aceasta, să folosim obiecte pentru a implementa calculele! Amintiți-vă: BMI= masă / înălțime ** 2 = masă / (înălțime * înălțime). (masa in kg si inaltimea in metri)
1. Pentru fiecare dintre ele, creați un obiect cu proprietăți pentru numele complet, masa și înălțimea lor (Mark Ganea și Vasile Cibotaru)
2. Creați o metodă „calcBMI” pe fiecare obiect pentru a calcula BMI (aceeași metodă pentru ambele obiecte). Stocați valoarea BMI într-o proprietate și, de asemenea, returnați-o din metodă.
3. Afisati in consola cine are BMI mai mare, împreună cu numele complet și BMI respectiv. Exemplu: „BMI-ul lui Vasile Cibotaru (28,3) este mai mare decât cel al lui Mark Ganea (23,9)!”
DATE TEST: Mark greutatea 78 kg și are 1,69 m înălțime. Vasile cântărește 92 kg și are 1,95 m înălțime.
*/
// Creăm obiectele pentru Mark și Vasile
const mark = {
    fullName: 'Mark Ganea',
    mass: 78,
    height: 1.69,

    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const vasile = {
    fullName: 'Vasile Cibotaru',
    mass: 92,
    height: 1.95,

    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

// Calculăm BMI-ul pentru amândoi
mark.calcBMI();
vasile.calcBMI();

// Comparăm BMI-urile și afișăm rezultatul
if (mark.bmi > vasile.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi.toFixed(1)}) is higher than ${vasile.fullName}'s (${vasile.bmi.toFixed(1)})!`);
} else if (vasile.bmi > mark.bmi) {
    console.log(`${vasile.fullName}'s BMI (${vasile.bmi.toFixed(1)}) is higher than ${mark.fullName}'s (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`Mark and Vasile have the same BMI (${mark.bmi.toFixed(1)})!`);
}

// Side note: Metoda toFixed(1) este folosită pentru a rotunji valoarea BMI la o zecimală.
// Sugestie de rezolvare alternativă, salvând valorile BMI-urilor şi a numelor în variabile
let markBMI = mark.calcBMI().toFixed(1);
let markFullName = mark.fullName;
let vasileBMI = vasile.calcBMI().toFixed(1);
let vasileFullName = vasile.fullName;
if (markBMI > vasileBMI) {
    console.log(`${markFullName}'s BMI (${markBMI}) is higher than ${vasileFullName}'s (${vasileBMI})!`);
} else if (vasileBMI > markBMI) {
    console.log(`${vasileFullName}'s BMI (${vasileBMI}) is higher than ${markFullName}'s (${markBMI})!`);
} else {
    console.log(`Mark and Vasile have the same BMI (${markBMI})!`);
}