import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [`
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  `]
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(({ data }) => {
      data.forEach(task => {
        task.is_completed = !!task.is_completed;
      });
      this.tasks = data;
    });
  }
}
