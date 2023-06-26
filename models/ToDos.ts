import ToDo from './ToDo';

export default class ToDos {
  public static toDos: ToDo[] = [];

  public static getTodoIndexFromID(id: String): number {
    for (let i = 0; i < this.toDos.length; i++) {
      if (this.toDos[i].id === id) {
        console.log(id);
        return i;
      }
    }

    return -1;
  }

  public static deleteTodo(index: number): void {
    this.toDos.splice(index, 1);
  }

  public static editTodo(index: number, tempToDo: ToDo): void {
    this.toDos[index] = tempToDo;
  }
}
