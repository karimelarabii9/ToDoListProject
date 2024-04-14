import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../interfaces/task';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  taskTitle: string = '';
  taskDescription: string = '';
  taskDueDate: string = '';

  constructor(public tasksService: TasksService,private router:Router) {}
  ngOnInit(): void {
  }

  saveTask(taskTitle:any,taskDescription:any,taskDueDate:any) {
      this.tasksService.saveTask(this.taskTitle, this.taskDescription, this.taskDueDate);
      this.router.navigate(['/'])
  }
}
