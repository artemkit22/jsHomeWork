// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// let form = document.forms[0]
//
// let users = []
// form.onsubmit = function (e){
//     e.preventDefault()
//     let username = this.username.value;
//     let name = this.surname.value;
//     let age = this.age.value;
//     users.push({username,name,age})
//     console.log(users)
// }
// let but = document.getElementById('btn')
//
// but.addEventListener('click', function (e){
//     for (const user of users) {
//         let div = document.createElement('div');
//         div.innerText = `name is: ${user.name}, surname is: ${user.surname}, age is: ${user.age}`
//         document.body.append(div)
//     }
//
// })

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// let number = JSON.parse(localStorage.getItem('number') || 0);
// let div = document.createElement('div')
// div.innerText = `${number}`
// document.body.append(div);
//
// window.onload=function (){
//     localStorage.setItem('number', JSON.stringify(number + 1))
// }


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================

// let sessions = localStorage.getItem('sessions');
// let data = sessions ? JSON.parse(sessions) : [];
//
// data.push({date: new Date()})
//
// localStorage.setItem('sessions', JSON.stringify(data))

//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
//

// let locations = [
//
//     {
//         "title": "Черкаський район",
//         "type": "raion"
//     },
//     {
//         "title": "Новоград-Волинський район",
//         "type": "raion"
//     },
//     {
//         "title": "Костянтинівська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Переяславська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Новоукраїнський район",
//         "type": "raion"
//     },
//     {
//         "title": "Уманський район",
//         "type": "raion"
//     },
//     {
//         "title": "Коростенська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "м. Переяслав",
//         "type": "city"
//     },
//     {
//         "title": "Шосткинський район",
//         "type": "raion"
//     },
//     {
//         "title": "Великоновосілківська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Чернігівський район",
//         "type": "raion"
//     },
//     {
//         "title": "Радомишльська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Вугледарська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Звенигородський район",
//         "type": "raion"
//     },
//     {
//         "title": "м. Конотоп",
//         "type": "city"
//     },
//     {
//         "title": "Вишгородська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Гребінківська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Сарненський район",
//         "type": "raion"
//     },
//     {
//         "title": "Бердянський район",
//         "type": "raion"
//     },
//     {
//         "title": "Миколаївський район",
//         "type": "raion"
//     },
//     {
//         "title": "Гостомелська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Дубровицька територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Українська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Сарненська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Воскресенська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "м. Маріуполь",
//         "type": "city"
//     },
//     {
//         "title": "Чугуївський район",
//         "type": "raion"
//     },
//     {
//         "title": "Охтирський район",
//         "type": "raion"
//     },
//     {
//         "title": "Житомирська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "м. Сарни",
//         "type": "city"
//     },
//     {
//         "title": "Широківська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Славутицька територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Золотоніський район",
//         "type": "raion"
//     },
//     {
//         "title": "Конотопська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Волноваський район",
//         "type": "raion"
//     },
//     {
//         "title": "Донецький район",
//         "type": "raion"
//     },
//     {
//         "title": "Маріупольська територіальна громада",
//         "type": "hromada"
//     },
//     {
//         "title": "Вараський район",
//         "type": "raion"
//     },
//     {
//         "title": "м. Славутич",
//         "type": "city"
//     }
// ];
//
//
// const prev = document.getElementById('prev');
// const next = document.getElementById('next');
// let page = 1;
// const limit = 10;
//
// const handler = (page, limit) => {
//     const wrapper = document.getElementById('wrapper');
//
//     let startIndex = (page - 1) * limit;
//     let endIndex = page * limit;
//         if (startIndex > 0){
//             prev.removeAttribute('disabled')
//         }else{
//             prev.setAttribute('disabled','disabled')
//         }
//     if (endIndex < locations.length){
//         next.removeAttribute('disabled')
//     }else{
//         next.setAttribute('disabled','disabled')
//         endIndex = locations.length
//     }
//
//     const state = [];
//     for (let i = startIndex; i < endIndex; i++) {
//         const obj = locations[i];
//
//         const item = document.createElement('div');
//         const title = document.createElement('div');
//         const type = document.createElement('div');
//
//         title.innerText = `Title: ${obj.title}`;
//         type.innerText = `Type: ${obj.type}`;
//
//         item.classList.add('item', 'wrapper');
//
//         item.append(title, type);
//         state.push(item);
//     }
//     wrapper.replaceChildren(...state);
// }
//
// handler(page, limit);
// prev.addEventListener('click', () => handler(page -= 1, limit));
// next.addEventListener('click', () => handler(page += 1, limit));
//
//


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
//
//
// let h1 = document.createElement('h1')
// let button = document.createElement('button');
//
// h1.innerText = 'xxxxx'
// button.innerText = 'woow'
//
// document.body.append(h1,button);
//
// button.addEventListener('click', ()=>{
//     h1.style.display = 'none'
// })

//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з
//     інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
// let form = document.forms[0]
// form.onsubmit = function (e){
//     e.preventDefault();
//     if (this.age.value < 18){
//         return alert('!!!!!!!!!!!!!!!!!')
//     }else {
//
//         return alert('NICE')
//
//     }
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком,
// в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається