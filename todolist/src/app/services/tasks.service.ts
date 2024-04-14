import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

 
  saveTask(Name: any, description: any, due_date: any)
   {
    this.tasks.push({
      Name,
      description,
      due_date,
      status:"pending"
    })
  }
tasks:Task[]=[ 
 { Name:"HCI quiz",
  description:"Quiz on monday till lab 5",
  due_date:new Date('2024-04-15'),
  status:"pending"
},
{
  Name:"Social Media Quiz",
  description:"Quiz on tuesday till lab 6",
  due_date:new Date('2024-04-16'),
  status:"pending"
},
]
constructor(private router: Router) {}
  deleteTask(i:number)
{
 this.tasks.splice(i,1)
}
}
export { Task };

