// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

// let url = new URL('http://jsonplaceholder.typicode.com/users')
// fetch(url)
//     .then(response => response.json())
//     .then(value => {
//        let ul =  document.createElement("ul");
//         for (const item of value) {
//            let li = document.createElement("li");
//             let a = document.createElement("a");
//
//             a.innerText = item.id + ' ' + item.name
//             a.href = 'user-details.html?id=' + JSON.stringify(item)
//
//             li.appendChild(a);
//             ul.appendChild(li)
//         }
//         document.body.append(ul)
//     });
//
//
