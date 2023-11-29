// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function xxx(a, b) {
//
// return a*b;
//
// }
// console.log(xxx(2, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function xxx (r){
//     return Math.PI*r*r;
// }
// console.log(xxx(2));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function xxx(h,r) {
// return 2*3.14 * r * (h+r)
// }
// console.log(xxx(2, 5));
// - створити функцію яка приймає масив та виводить кожен його елемент
// let x = [11,"adas",true];
// function xxx(array) {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// xxx(x);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function xxx(text) {
//     document.write(`<p>${text}</p>`)
// }
// xxx("РУСНІ ПІЗД@");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function xxx(text) {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// xxx("РУСНІ ПІЗД@");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function xxx(text,number) {
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`);
// }
// xxx("РУСНІ ПІЗД@", 3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let x =[123, "asdas", true]
// function xxx(array) {
// document.write(`<ul>`);
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
// document.write(`</ul>`);
// }
// xxx(x);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
// let shild = [
//     {id:1, name: "Artem", age: 22},
//     {id:2, name: "kokos", age: 1234},
//     {id:3, name: "vasya", age: 47}
// ]
// function xxx(array) {
//     for (const item of array) {
//         document.write(`<div> id - ${item.id}</div>`)
//         document.write(`<div> name - ${item.name}</div>`)
//         document.write(`<div> age - ${item.age}</div>`)
//     }
// }
// xxx(shild);

// - створити функцію яка повертає найменьше число з масиву
// function xxx(num) {
//     let min = num[0]
//     for (let i = 0; i < num.length; i++) {
//         if (min>num[i]){
//             min=num[i];
//         }
//     }
// return min
// }
// let numbers = [7,4,8,9,6];
// console.log(xxx(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum(arr){
//     let x = 0
//     for (const item of arr) {
//         x = x+item
//     }
//     return x
// }
// console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2){
// let x = arr[index2];
// arr[index2]=arr[index1];
// arr[index1] = x;
//     return arr
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency){
//             return sumUAH/item.value;
//         }
//     }
// }
// let x = exchange(10000, [{currency:'USD',value:40}, {currency:'EUR',value:42}], 'USD')
// console.log(x)