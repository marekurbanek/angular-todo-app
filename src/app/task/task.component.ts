import { Component, Input, Output } from '@angular/core';
import { TaskService } from '../task.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent {
  @Input() task: ITask;
  taskForm: FormGroup;
  constructor(private taskService: TaskService) { }

  checkboxChanged(task) {
    task.is_completed = !task.is_completed;
    const formData = this.createFormData();

    this.taskService.addOrUpdateTask(formData).subscribe();
  }

  private createFormData() {
    const formData = new FormData();
    formData.append('id', this.task.id);
    formData.append('task', this.task.task);
    formData.append('is_completed', `${this.task.is_completed}`);
    return formData;
  }
}
