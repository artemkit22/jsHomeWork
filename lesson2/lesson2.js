// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [
//     123,
//     456,
//     "asd",
//     "87567",
//     true,
//     false,
//     "asdwet",
//     21567,
//     679868,
//     "svgdfhfg"
// ];
// console.log(arr);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title : "TRUST NO ONE",
//     pageCount : 999,
//     genre : "real life of everybody"
// };
// console.log(book1)
// let book2 = {
//     title: "PAIN",
//     pageCount: 666,
//     genre : "realism"
// };
// console.log(book2);
// let book3 = {
//     title: "woman",
//     pageCount: 69,
//     genre : "painfull story"
// };
// console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1 = {
//     title: "za sho",
//     pageCount: 394,
//     genre : "horor",
//     autors : [
//         name = "vasya",
//         age = 29
//     ]
// };
// console.log(book1);
// let book2 = {
//     title: "work in IT",
//     pageCount: 345,
//     genre : "aim",
//     autors : [
//         name = "Artem",
//         age = 22
//     ]
// };
// console.log(book2);
// let book3 = {
//     title: "sucsess",
//     pageCount: 1239,
//     genre : "reality",
//     autors : [
//         name = "petya",
//         age = 123
//     ]
// };
// console.log(book3);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
//
// let users = [
//     {name: "vasya", username: "zombi213", password: 12343456},
//     {name: "kokos", username: "alkash412", password: 4358970},
//     {name: "olya", username: "uspeshnuy5764", password: 353890},
//     {name: "petya", username: "killer228", password: 2451243},
//     {name: "oleg", username:"superninja12", password: 534456},
//     {name: "dima", username: "kawasaki3456", password: 789098234},
//     {name: "sanya", username: "programist666", password: 547678},
//     {name: "artem", username: "superpacan8821", password: 124323657},
//     {name: "artur", username: "naruto0932", password: 5476435},
//     {name: "vicktor", username: "krutojpoc1273", password: 674576546}
// ];
// console.log(users[0].password);
// console.log(users[1].password);
// console.log(users[2].password);
// console.log(users[3].password);
// console.log(users[4].password);
// console.log(users[5].password);
// console.log(users[6].password);
// console.log(users[7].password);
// console.log(users[8].password);
// console.log(users[9].password);
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 0
// if(x !== 0){
//     console.log('Вірно')
// }else{
//     console.log('Невірно')
// }
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 0
// if(time <= 15){
//     console.log("1/4");
// }else if (time >= 16 && time <= 30){
//     console.log("2/4")
// }else if (time >= 31 && time <= 45){
//     console.log("3/4")
// }else if (time >= 46 && time <= 60) {
//     console.log("4/4")
// }else {
//     alert("WRONG TIME!!!!!")
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 11
// if(day <= 10){
//     console.log("1/3");
// }else if (day >= 11 && day <= 20){
//     console.log("2/3")
// }else if (day >= 21 && day <= 31){
//     console.log("3/3")
// }else {
//     alert("WRONG DAY!!!!!")
// }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = prompt("what is the day?")
// switch (day){
//     case "1" :
//         console.log("it's monday");
//         break;
//     case "2" :
//         console.log("it's thusday");
//         break;
//     case "3" :
//         console.log("it's wednesday");
//         break;
//     case "4" :
//         console.log("it's thursday");
//         break;
//     case "5" :
//         console.log("it's friday");
//         break;
//     case "6" :
//         console.log("it's sunday");
//         break;
//     case "7" :
//         console.log("it's saturday");
//         break;
//     default:
//         console.log("wrong day stupid shkolnik");
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
//
// let number1 = +prompt("введіть число");
// let number2 = +prompt("введіть число");
// if (number1 > number2){
//     console.log(number1);
// }else if (number2 > number1){
//     console.log(number2);
// } else {
//     console.log("ОДНАКОВІ ЧИСЛА!!!!");
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
//
// let x
// if (x == null ||  0 || "" || undefined){
//     x = "default";
//     console.log(x)
// }else {
//     console.log(x);
// }
// НЕ РОЗУМІЮ ЧОМУ НЕ ПРАЦЮЄ І УМОВИ ЗАВДАННЯ =((((((((((

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[0].monthDuration >= 5){
//     console.log("Супер");
// } if (coursesAndDurationArray[1].monthDuration >= 5){
//     console.log("Супер");
// } if (coursesAndDurationArray[2].monthDuration >= 5){
//     console.log("Супер");
// } if (coursesAndDurationArray[3].monthDuration >= 5){
//     console.log("Супер");
// } if (coursesAndDurationArray[4].monthDuration >= 5){
//     console.log("Супер");
// } if (coursesAndDurationArray[5].monthDuration >= 5){
//     console.log("Супер");
// }else{
//     alert("")
// }
