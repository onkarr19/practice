/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.tasks = []
    }

    add(task) {
        this.tasks.push(task)
    }

    remove(idx) {
        this.tasks.splice(idx, 1)
    }

    update(idx, task) {
        if (idx >= 0 && idx < this.tasks.length)
            this.tasks[idx] = task
    }

    getAll() {
        return this.tasks
    }

    get(idx) {
        if (idx >= 0 && idx < this.tasks.length)
            return this.tasks[idx];
        return null;
    }

    clear() {
        this.tasks = []
    }
}

module.exports = Todo;
