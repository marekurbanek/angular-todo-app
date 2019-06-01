import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styles: [`
    .todo__input {
      display: inline-block;
      border: 1px solid #cccccc;
      padding: 0.5rem;
      width: calc( 100% - 1rem );
      box-shadow: none;
      outline: none;
    }
    .todo__add {
      padding: 1.25rem 1.25rem;
      border-bottom: 1px solid #eeeeee;
    }
  `]
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
