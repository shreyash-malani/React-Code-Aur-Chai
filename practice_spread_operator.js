// a = [1,3,5,7,9]
// b = a
// console.log(a)
// console.log(b)
// b.push(11)
// console.log(a)
// console.log(b)

// a1 = [1,3,5,7,9]
// b1 = [...a1]
// console.log(a1)
// console.log(b1)
// b1.push(11)
// console.log(a1)
// console.log(b1)
const prompt = require("prompt-sync")();

todos = [
    {
        id: 1,
        todo: "Todo 1",
        completed: false,
    },
    {
        id: 2,
        todo: "Todo 2",
        completed: false,
    },
    {
        id: 3,
        todo: "Todo 3",
        completed: false,
    }
]
console.log(todos)

let newTodo = {}
newTodo.id = Number(prompt("Enter id: ")) 
newTodo.todo = prompt("Enter todo message: ")
newTodo.completed = prompt("Enter completed status: ")



function addTodo(newTodo) {
    todos = [...todos, newTodo]    
}
addTodo(newTodo)
console.log(todos)

let updateTodo1 = {}
updateTodo1.todo = prompt("Enter todo message: ")
// updateTodo1.completed = prompt("Enter completed status: ")

let id1 = Number(prompt("Id to update: "))
function updateTodo(id1, newTodo) {

    todos = todos.map((todo) => todo.id == id1 ? {...todo,...newTodo} : todo)
}
updateTodo(id1, updateTodo1)

console.log(todos)
