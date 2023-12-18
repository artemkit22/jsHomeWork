// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname , email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let mas = []
//     mas.push(
//         new User(1, "vasya", "kokos", "sdfasd@gmail.com", +380943568384),
//         new User(2, "anna", "rweqr", "sadf@gmail.com", +3804564536),
//     new User(3, "olya", "rtrt", "fgfgh@gmail.com", +38093453484),
//     new User(4, "kolya", "vdssadf", "fgh@gmail.com", +380941232138384),
//     new User(5, "petya", "qwer", "wer@gmail.com", +380943789384),
//     new User(6, "cxvxc", "zxcv", "asdf@gmail.com", +380567654),
//     new User(7, "kuik", "ert", "qwert@gmail.com", +38094897084),
//      new User(8, "tret", "cxzvsdf", "bcxsdf@gmail.com", +38094234384),
//     new User(9, "fgjt", "wsadf", "zfgnjhg@gmail.com", +38097894),
//     new User(10, "asd", "yrhgfh", "yhtjrhg@gmail.com", +3809490654)
//     )
// console.log(mas);
//
// //
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = mas.filter(function (item){
//     if (item.id %2===0){
//         console.log(item)
//         return true
//     }
//     return false
// })
// console.log(filter)
// //
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// //
// let sort = filter.sort((a,b)=>{
//     return a.id-b.id
// })
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//
//     }
// }
//
// let xxx = []
// xxx.push(
//     new Client(1,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana"]),
//     new Client(2,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "orange", ]),
//     new Client(3,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "orange", "kokos"]),
//     new Client(4,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "orange", "kokos", "apple"]),
//     new Client(5,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "orange", "kokos", "apple", "carrot"]),
//     new Client(6,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana",]),
//     new Client(7,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "kokos"]),
//     new Client(8,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "orange", "melon", "watermalon", "kokos"]),
//     new Client(9,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "orange", "kokos"]),
//     new Client(10,"kokos", "asdfsad", "asdjsaf@gmail.com", +380912495,["banana", "melon", "watermalon", "lemon", "pineapple", "orange", "kokos"]),
// );
// console.log(xxx)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// let sort = xxx.sort((a,b)=>{
//     a.order.length - b.order.length
// })
// console.log(sort)

//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//


// function Car (model, producer, year, maxSpeed, volume, driver){
// this.model = model;
// this.producer = producer;
// this.year = year;
// this.maxSpeed = maxSpeed;
// this.volume = volume;
// this.driver = driver
// function drive() {
//     console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
// }
//
// drive()
//
//     function info(){
//         console.log(`Model - ${model}, Producer - ${producer}, Year - ${year}, Maxspeed - ${maxSpeed}, Volume - ${volume}`);
//     }
//     info()
//
//
//     function increaseMaxSpeed(newSpeed){
//             maxSpeed += newSpeed
//             console.log(`new speed of this car ${maxSpeed}`)
//         }
//     increaseMaxSpeed(150)
//
//     function changeYear(newValue){
//         year = newValue
//         console.log(`New year of this car - ${year}`)
//     }
//     changeYear(2025)
//
//
//     function addDriver (driver) {
//         console.log(`Ім'я водія - ${driver.name},
// Вік водія - ${driver.age},
// Досвід водія - ${driver.expirience}
//         `)
//     }
//     addDriver(driver)
//
//
// }
//
//
// let car = new Car("rs7", "audi", 2023, 300, 3.0,{
//
//     name:"Василь-кіт",
//     age:23,
//     expirience: "2 роки"
// })


//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//

// class Car {
//     constructor(model, producer, year, maxSpeed, volume, driver) {
//        this.model = model;
//        this.producer = producer;
//        this.year = year;
//        this.maxSpeed = maxSpeed;
//        this.volume = volume;
//        this.driver = driver
//
//     }
//  drive() {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//
// }
//
//    info(){
//         console.log(`Model - ${this.model}, Producer - ${this.producer}, Year - ${this.year}, Maxspeed - ${this.maxSpeed}, Volume - ${this.volume}`);
//
//     }
//
//     increaseMaxSpeed(newSpeed){
//             this.maxSpeed += newSpeed
//             console.log(`new speed of this car ${this.maxSpeed}`)
//         }
//
//
//    changeYear(newValue){
//         this.year = newValue
//         console.log(`New year of this car - ${this.year}`)
// }
//
//     addDriver (driver) {
//         console.log(`Ім'я водія - ${this.driver.name},
// Вік водія - ${this.driver.age},
// Досвід водія - ${this.driver.expirience}
//         `)
//     }
// }
// let car = new Car("rs7", "audi", 2023, 300, 3.0,{
//
//     name:"Василь-кіт",
//     age:23,
//     expirience: "2 роки"
//
// })
// car.info()
// car.drive()
// car.increaseMaxSpeed(200)
// car.changeYear(2025)
// car.addDriver()
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// let mas = []
// function Pop (name, age, count){
//     this.name = name
//     this.age= age
//     this.count=count
//
// }
// mas.push(new Pop("olya", 30, 37))
// mas.push(new Pop("asdfsa", 32, 34))
// mas.push(new Pop("kobyla", 29, 36))
// mas.push(new Pop("cvb", 26, 34))
// mas.push(new Pop("olZcya", 23, 53))
// mas.push(new Pop("ertewrt", 65, 39))
// mas.push(new Pop("ertewrt", 25, 41))
// mas.push(new Pop("ertewrt", 42, 32))
// mas.push(new Pop("ertewrt", 31, 43))
// mas.push(new Pop("ertewrt", 34, 23))
//
// class Prince {
//     constructor(name, age, count) {
//         this.name = name
//         this.age= age
//         this.count=count
//     }
// }
// let lox = new Prince("vasya", 19, 36)
// for (const item of mas) {
//     if (item.count === lox.count){
//         console.log(`${item.name} = ${lox.name}`)
//     }
// }




//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


