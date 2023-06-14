export default class ToDo {
  public id: string;
  public title: string;
  public priority: string;
  public completed: boolean;
  public dateDue: Date;

  constructor(
    id: string,
    title: string,
    priority: string,
    completed: boolean,
    dateDue: Date,
  ) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.completed = completed;
    this.dateDue = dateDue;
  }
}
