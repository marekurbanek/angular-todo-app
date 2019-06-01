import { Component, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent {
  @Input() task: ITask;
  constructor(private taskService: TaskService) { }

  checkboxChanged(task) {
    task.is_completed = !task.is_completed;
    const formData = this.createFormData();

    this.taskService.addOrUpdateTask(formData).subscribe();
  }

  deleteTask(id) {
    this.taskService.deleteTask(id).subscribe(res => console.log(res))
  }

  private createFormData() {
    const formData = new FormData();
    formData.append('id', this.task.id);
    formData.append('task', this.task.task);
    formData.append('is_completed', `${this.task.is_completed}`);
    return formData;
  }
}
