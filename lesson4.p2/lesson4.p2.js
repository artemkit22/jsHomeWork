// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let xxx = (a, b) => console.log(a+b);
//
// xxx(10,20)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let xxx =(r)=> console.log(3.14*r*r)
// xxx(2)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let xxx = (h,r) => console.log(2*3.14*r*(h+r))
// xxx(2,5)

// - створити функцію яка приймає масив та виводить кожен його елемент
// let x = [11,"adas",true];
// let xxx = (array) => {
//     for (const item of array) {
//         console.log(item)
//     }
// }
// xxx(x)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let xxx =(text)=>{
//     document.write(`<p>${text}</p>`)
// }
// xxx("Rusni pizd@")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let xxx =(text)=>{
//     document.write(`<ul>
//     <li>${text}</li>
//     <li>${text}</li>
//     <li>${text}</li>
// </ul>`)
//
// }
// xxx("Rusni pizd@")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let xxx =(text, num)=>{
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<p>${text}</p>`)
//     }
//     document.write(`</ul>`)
// }
// xxx("Rusni pizd@", 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let x = [11,"adas",true];
// let xxx = (array) => {
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`)
// }
// xxx(x)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let x = [
//     {id:1, name:"Artem", age:22},
//     {id:2, name:"Victor", age:54},
//     {id:3, name:"Artur", age:25}
// ];
// let xxx = (array) => {
//     document.write(`<ul>`)
//     for (const item of array) {
//         document.write(`<div>${item.id}: name - ${item.name} age - ${item.age}</div>`)
//     }
//     document.write(`</ul>`)
// }
// xxx(x)

// - створити функцію яка повертає найменьше число з масиву
// let num = [71,4,2,10,34]
// let xxx = (num) => {
//     let min = num[0]
//     for (let i = 0; i < num.length; i++) {
//         if (min > num[i]){
//             min = num[i]
//         }
//     }
//     return min
//     }
//
// console.log(xxx(num));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = (arr) => {
//     let x = 0
//     for (const item of arr) {
//         x += item
//     }
//         console.log(x)
// }
// sum([1,2,10])

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr,first,second) => {
// let x = arr[first];
// arr[first] = arr[second];
// arr[second] = x
//     return arr
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

// let exchange = (sumUAH,currencyValues,exchangeCurrency,exchangeCurrencyEUR) => {
//
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency){
//             return sumUAH / item.value
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD', 'EUR'));

// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250