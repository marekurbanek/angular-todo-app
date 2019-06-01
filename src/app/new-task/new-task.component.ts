import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html'
})

export class NewTaskComponent implements OnInit {
  newTask = '';
  @Output() addedTask = new EventEmitter();

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }

  onEnter() {
    const formData = this.createFormData();

    this.taskService.addOrUpdateTask(formData).subscribe(
      (res) => {
        this.addedTask.emit();
        this.newTask = '';
      },
      (err) => console.log(err)
    );
  }

  private createFormData() {
    const formData = new FormData();
    formData.append('task', this.newTask);
    formData.append('is_completed', '0');
    return formData;
  }
}
