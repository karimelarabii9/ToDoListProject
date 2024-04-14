import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

cancelEdit() {
  this.editingTask = null;
}
saveEditedTask(title: string, description: string, dueDate: string) {
  if (this.editingTask) {
    // Update the properties of the editing task
    this.editingTask.Name = title;
    this.editingTask.description = description;
    this.editingTask.due_date = new Date(dueDate);
    this.editingTask = null; // Reset editing task
  }
}
toggleTaskCompletionForCheckBox(index: number) {
  const task = this.tasksService.tasks[index];
  task.completed = !task.completed; 
  task.status = task.completed ? 'Completed' : 'pending';
}
editTask(task: Task) {
  this.editingTask = task; // Assign the task to editingTask directly
}

  editingTask: Task | null = null; // Track the task being edited

  constructor(public tasksService: TasksService) { }

  ngOnInit(): void { }

  deleteTask(i: number) {
    this.tasksService.deleteTask(i);
  }
}
