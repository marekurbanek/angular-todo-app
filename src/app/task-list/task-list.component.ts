import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: TaskNode[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    console.log("FETCHED TASKS")
    this.taskService.getTasks().subscribe(tasks => {
      console.log("FETCHED TASKS")
      console.log(tasks)
      this.tasks = tasks;
    });
  }

}
