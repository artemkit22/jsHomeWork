// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (const string of arr) {
//     console.log(string.length)
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let arr = ['hello world', 'lorem ipsum', 'javascript is cool']
// for (const string of arr) {
//     console.log(string.toUpperCase())
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let arr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
// for (const string of arr) {
//     console.log(string.toLowerCase())
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); //['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// function stringToarray(str) {
//     console.log(str.split(" "));
// }
// stringToarray(str)


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let xxx = [10,8,-7,55,987,-1011,0,1050,0];
//
// let newXxx = xxx.map((item) => item.toString())
// console.log(newXxx);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// function sortNums(nums,direction) {
//     if(direction === 'ascending'){
//         nums.sort((a,b) => a - b);
//         return nums
//     }else{
//             nums.sort((a,b) => b - a);
//     return nums
// }
// }
// console.log(sortNums(nums, 'ascending'));
// console.log(sortNums(nums, 'descending'));


//
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let mounth = coursesAndDurationArray.sort((a,b)=>b.monthDuration - a.monthDuration)
// console.log(mounth)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let month = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
// console.log(month)








/////////////////////////ГОРИТЬ ЖОПА///////////////////////////////////////////
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

// =========================
// let maparr = coursesAndDurationArray.map((item, index, array) => {
//     return{
//         id:index+1,
//         title:item.title,
//         monthDuration:item.monthDuration
//     };
//
// });
// console.log(maparr);

////////////////////////////РАЗІБРАТИ НА РАЗБОРІ ДАННЕ ЗАВДАННЯ БЛ******ТЬ/////////////////////////////







// let cards = [
//     { cardSuit: 'spade', value: '6', color: 'black' },
//     { cardSuit: 'diamond', value: '6', color: 'red' },
//     { cardSuit: 'heart', value: '6', color: 'red' },
//     { cardSuit: 'clubs', value: '6', color: 'black' },
//     { cardSuit: 'spade', value: '7', color: 'black' },
//     { cardSuit: 'diamond', value: '7', color: 'red' },
//     { cardSuit: 'heart', value: '7', color: 'red' },
//     { cardSuit: 'clubs', value: '7', color: 'black' },
//     { cardSuit: 'spade', value: '8', color: 'black' },
//     { cardSuit: 'diamond', value: '8', color: 'red' },
//     { cardSuit: 'heart', value: '8', color: 'red' },
//     { cardSuit: 'clubs', value: '8', color: 'black' },
//     { cardSuit: 'spade', value: '9', color: 'black' },
//     { cardSuit: 'diamond', value: '9', color: 'red' },
//     { cardSuit: 'heart', value: '9', color: 'red' },
//     { cardSuit: 'clubs', value: '9', color: 'black' },
//     { cardSuit: 'spade', value: '10', color: 'black' },
//     { cardSuit: 'diamond', value: '10', color: 'red' },
//     { cardSuit: 'heart', value: '10', color: 'red' },
//     { cardSuit: 'clubs', value: '10', color: 'black' },
//     { cardSuit: 'spade', value: 'jack', color: 'black' },
//     { cardSuit: 'diamond', value: 'jack', color: 'red' },
//     { cardSuit: 'heart', value: 'jack', color: 'red' },
//     { cardSuit: 'clubs', value: 'jack', color: 'black' },
//     { cardSuit: 'spade', value: 'queen', color: 'black' },
//     { cardSuit: 'diamond', value: 'queen', color: 'red' },
//     { cardSuit: 'heart', value: 'queen', color: 'red' },
//     { cardSuit: 'clubs', value: 'queen', color: 'black' },
//     { cardSuit: 'spade', value: 'king', color: 'black' },
//     { cardSuit: 'diamond', value: 'king', color: 'red' },
//     { cardSuit: 'heart', value: 'king', color: 'red' },
//     { cardSuit: 'clubs', value: 'king', color: 'black' },
//     { cardSuit: 'spade', value: 'ace', color: 'black' },
//     { cardSuit: 'diamond', value: 'ace', color: 'red' },
//     { cardSuit: 'heart', value: 'ace', color: 'red' },
//     { cardSuit: 'clubs', value: 'ace', color: 'black' },
// ];

//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// for (const card of cards) {
//     if(card.cardSuit === 'spade' && card.value === 'ace' && card.color === 'black'){
//         console.log(card)
//     }
// }
// - всі шістки
// for (const card of cards) {
//     if (card.value === '6'){
//         console.log(card)
//     }
// }
// - всі червоні карти
// for (const card of cards) {
//     if (card.color === 'red'){
//         console.log(card)
//     }
// }
// - всі буби
// for (const card of cards) {
//     if (card.cardSuit === 'diamond'){
//         console.log(card)
//     }
// }
// - всі трефи від 9 та більше
// for (const card of cards) {
//     if (card.cardSuit === "clubs" && card.value === '9' ||
//         card.cardSuit === "clubs" && card.value === '10' ||
//         card.cardSuit === "clubs" && card.value === 'jack'||
//         card.cardSuit === "clubs" && card.value === 'queen' ||
//         card.cardSuit === "clubs" && card.value === 'king' ||
//         card.cardSuit === "clubs" && card.value === 'ace')
//     {
//         console.log(card)
//     }
// }
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// let reduce = cards.reduce((accumulator, card) => {
//     if(card.cardSuit === "spade"){
//         accumulator[0].push(card)
//     }else if(card.cardSuit === "diamond"){
//             accumulator[1].push(card)
//     }else if(card.cardSuit === "heart"){
//         accumulator[2].push(card)
//     }else if(card.cardSuit === "clubs"){
//         accumulator[3].push(card)
//     }else{
//         alert("!!!!!!!!")
//     }
// return accumulator
// },[[], [], [], []]);
//
// console.log(reduce);
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray


// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// --написати пошук всіх об'єктів, в який в modules є sass
// for (const item of coursesArray) {
//
//     for (const modul of item.modules) {
//         if (modul === "sass"){
//             console.log(item)
//         }
//
//     }
// }


// --написати пошук всіх об'єктів, в який в modules є docker
// for (const item of coursesArray) {
//
//     for (const modul of item.modules) {
//         if (modul === "docker"){
//             console.log(item)
//         }
//
//     }
// }