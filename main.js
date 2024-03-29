// // 1-savol Arifmetik operatorla

// //  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// // javob:Pasdan yozib keting kodini


// function func1() {
//     let a = 5
//     let b = 2
//     let c
//     c = a % b
//     alert(c)
// }









// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// Javob:Pasdan yozib keting kodini


// function math() {
//     let random1 = Math.floor(Math.random() * 10);
//     alert(random1);
// }

// math()











// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring!

// javob: 12 chiqishi kerak!


// function func3() {
//     let number = Math.floor(12.510);
//     alert(number);
// }

// func3();











// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// Javob:Kodini yozib bering


// function func4() {
//     let text = "MARS IT SCHOOL"
//     let lenght = text.length
//     alert(lenght);
// }

// func4();













// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// Javob:Kodini yozib bering

// function loop() {
//     for (let i = 0; i < 10; i++) {
//         let text = "MARS IT SCHOOL"
//         console.log(text);
//     }
// }

// loop();













// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// Javob:Kodini yozib bering

// function func6() {
//     const ism = [];
//     const harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

//     alert(harflar[1] + harflar[3] + harflar[21] + harflar[16]   + harflar[19] + harflar[23] + harflar[1] + harflar[3] + harflar[9]);

// }

// func6();












// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Javob:Kodini yozib bering


// function if () {
//     let yosh = Number(prompt("Yoshingizni kiriting"));

//     if (yosh > 18) {
//         console.log("Siz balag'ot yoshiga yetgansiz");
//     } else if (yosh === 18) {
//         console.log("Balog'at yoshi muborak");
//     } else {
//         console.log("Siz balog'at yoshiga yetmagansiz");
//     }
// }

// if();















// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Javob:Kodini yozib bering


// let name = prompt("Ismingizni kiriting");

// let letter1 = name.charAt(8);
// let letter2 = name.charAt(7);
// let letter3 = name.charAt(6);
// let letter4 = name.charAt(5);
// let letter5 = name.charAt(4);
// let letter6 = name.charAt(3);
// let letter7 = name.charAt(2);
// let letter8 = name.charAt(1);
// let letter9 = name.charAt(0);
// console.log(letter1);
// console.log(letter2);
// console.log(letter3);
// console.log(letter4);
// console.log(letter5);
// console.log(letter6);
// console.log(letter7);
// console.log(letter8);
// console.log(letter9);














// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring


// Javob :Kodini yozib bering


// function func9() {
//     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let array2 = []

// for (let i = 0; i < 10 x; i++) {
//     let check = array[i] % 2

//     if (check === 0) {
//         array2.push(array[i])
//         console.log(array2);
//     } else {
//         console.log();
//     }

// }
// }