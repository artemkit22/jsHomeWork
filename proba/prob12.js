let url = new URL('http://jsonplaceholder.typicode.com/users')
fetch(url)
.then(response => response.json())
.then(value => {
    let ul = document.createElement("ul")
    for (const item of value) {
        let li = document.createElement("li")
        let a = document.createElement("a")

        a.innerText =  item.id + ' ' + item.name
        a.href = 'prob12.1.html?id=' + JSON.stringify(item)

        li.append(a)
        ul.append(li)
    }
    document.append(ul)
})