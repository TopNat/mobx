import { action, computed,  observable } from "mobx";

export interface TodoList {
  name: string;
  priority: string;
}

export class TodosStore {
 

  @observable todoList: TodoList[] = [
    {
      name: "Погулять",
      priority: "low",
    },
  ];
  @observable changeValue = "";
  @observable errorTodo: string = "";

  @computed
  filterByPriority(priority: string) {
    return this.todoList.filter((todo) => todo.priority === priority);
  }

  @action
  addNewTodo(newTodo: TodoList) {
    this.todoList.push(newTodo);
  }
  @action
  delTodoList(todoName: string) {
    this.todoList = this.todoList.filter((item) => item.name !== todoName);
  }
}
