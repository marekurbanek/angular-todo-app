import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [
    {
      id: '5707a8c6-5104-48f5-b6b5-b30941740027',
      candidate: 'szalkowska.weronika',
      task: 'Complete the Angular application',
      isCompleted: 0
    },
    {
      id: '63c7aa62-220d-4a3f-8644-f5c8b4a06029',
      candidate: 'szalkowska.weronika',
      task: 'Read the task requirements',
      isCompleted: 0
    }
  ];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}
