let btn = document.querySelector("form button")

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let todoText = document.getElementById("content")
    let todoMonth = document.getElementById("month")
    let todoDay = document.getElementById("day")
    let todoList = document.querySelector("div.todoList")
    if (todoText.value === "") {
        alert("請輸入代辦事項")
        return
    }

    let container = document.createElement("div")
    let containerText = document.createElement("p")
    containerText.classList.add("todoText");
    containerText.textContent = todoText.value;
    let containerDate = document.createElement("p")
    containerDate.classList.add("todoDate");
    containerDate.textContent = `${todoMonth.value}/${todoDay.value}`
    let done = document.createElement("button")
    let doneImg = document.createElement("img")
    doneImg.src = "./1x/done.png"
    done.appendChild(doneImg)
    let del = document.createElement("button")
    let delImg = document.createElement("img")
    delImg.src = "./1x/delete.png"
    del.appendChild(delImg)
    let myList = {
        "text": todoText.value,
        "month": todoMonth.value,
        "day": todoDay.value
    }

    let todo = localStorage.getItem("todo");
    console.log(todo)
    if (todo == null) {
        localStorage.setItem("todo", JSON.stringify([myList]))
    } else {
        let todoStorage = JSON.parse(todo)
        todoStorage.push(myList)
        localStorage.setItem("todo", JSON.stringify(todoStorage))
    }

    container.appendChild(containerText);
    container.appendChild(containerDate);
    container.appendChild(done);
    container.appendChild(del);
    todoList.appendChild(container);
    todoText.value = ""
    todoMonth.value = ""
    todoDay.value = ""

    done.addEventListener("click", (e) => {
        container.classList.toggle("done");
    })
    del.addEventListener("click", (e) => {
        let text = container.children[0].innerText
        let todo = JSON.parse(localStorage.getItem("todo"))
        todo.forEach((n, index) => {
            if (n.text == text) {
                todo.splice(index, 1);
                localStorage.setItem("todo", JSON.stringify(todo))
                console.log(todo)
            }
        })
        container.remove();
    })
})

let todo = JSON.parse(localStorage.getItem("todo"))
console.log(todo)
if (todo !== null) {
    todo.forEach((n) => {
        let todoList = document.querySelector("div.todoList")
        let container = document.createElement("div")
        let containerText = document.createElement("p")
        containerText.classList.add("todoText");
        containerText.textContent = n.text;
        let containerDate = document.createElement("p")
        containerDate.classList.add("todoDate");
        containerDate.textContent = `${n.month}/${n.day}`
        let done = document.createElement("button")
        let doneImg = document.createElement("img")
        doneImg.src = "./1x/done.png"
        done.appendChild(doneImg)
        let del = document.createElement("button")
        let delImg = document.createElement("img")
        delImg.src = "./1x/delete.png"
        del.appendChild(delImg)

        container.appendChild(containerText);
        container.appendChild(containerDate);
        container.appendChild(done);
        container.appendChild(del);
        todoList.appendChild(container);

        done.addEventListener("click", (e) => {
            container.classList.toggle("done");
        })
        del.addEventListener("click", (e) => {
            let text = container.children[0].innerText
            let todo = JSON.parse(localStorage.getItem("todo"))
            todo.forEach((n, index) => {
                if (n.text == text) {
                    todo.splice(index, 1);
                    localStorage.setItem("todo", JSON.stringify(todo))
                    console.log(todo)
                }
            })
            container.remove();
        })
    })
}
