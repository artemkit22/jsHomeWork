// function xxx (a,b) {
//     try {
//     if (b === 0){
//         throw new Error('you cannot have by 0!');
//     }
//     return a/b;
//
//     }catch (e){
//         console.log(e)
//     }
// }
// xxx(10, 0 )

//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]

// function xxx(users){
//     for (const user of users) {
//         try {
//             console.log(user.wife.name)
//         }catch (e) {
//             console.log("NEMA TAKOGO POLYA")
//         }
//     }
// }
// xxx(users);

// let obj = {
//     id: 3242,
//     name: "asdsad"
// }
// if (obj.wife){
//     console.log(obj.wife.name);
// }
//
// console.log(obj.wife?.name?.lastname);

// let name = "sdfsdf";
// let age = 13432;
//
// let user = {
//     name,
//     age
// };
// console.log(user)

// function xxx (id, age,name,greeting){
//     return{
//      id,
//      name,
//      age,
//      greeting,
//     }
// }
// let user = xxx(1,"sadfsd", 32,()=>{
//     console.log("hello");
// });
// console.log(user)
// user.greeting()

// function xxx({id, name:firstName}) {
//     // let {id,name} = obj
//     // console.log(id,name)
//
//     // let qwe = obj.id
//     // let qaz = obj.name
//     // let zxc = obj.age
//     // console.log(qwe)
//     // console.log(qaz)
//     // console.log(zxc)
//
//     console.log(id,firstName)
// }
//
// xxx({id: 1, name: 'kokos', age: 31})
// xxx({id: 2, name: 'abrikos', age: 31, status: true})

// let user = {
//     id: 1,
//     name: "fsdafsd",
//     age: 31
// }
//
// let user2 = {...user, status:true, id: 2}
// console.log(user)
// console.log(user2)

// let user = {
//     id: 1,
//     name: "fsdafsd",
//     age: 31,
//     wife: {name: 'anna'}
// }
// user2 = {...user};
//
// console.log(user2)

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ]
//
// let map = users.map((user,index) => {
//     let string = JSON.stringify(user);
//     let parse = JSON.parse(string);
//     parse.id = index+1;
//     return parse
// });
// console.log(map)

// let xxx = {
//     id:120124
// }
// console.log(xxx)
// let qwe = JSON.stringify(xxx);
// console.log(qwe);
// let zxc = JSON.parse(qwe);
// console.log(zxc)

// let obj = {
//     id: 2325,
//     emb: {
//         qwe:"asdasd"
//     }
// }
// let imba = structuredClone(obj);
// console.log(imba)
// console.log(imba === obj)
// console.log(imba.emb === obj.emb)
