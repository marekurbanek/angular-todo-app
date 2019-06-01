import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html'
})

export class NewTaskComponent implements OnInit {
  newTask = '';
  uploadForm: FormGroup;
  @Output() addedTask = new EventEmitter();

  constructor(private formBuilder: FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }

  onEnter() {
    const formData = this.createFormData();

    this.taskService.addTask(formData).subscribe(
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
    formData.append('is_completed', 'false');
    return formData;
  }
}
