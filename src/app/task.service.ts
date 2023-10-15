import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];

  constructor() {
    this.loadTasksFromLocalStorage();
   }

   getTasks(): Task[] {
    return this.tasks;
   }

   addTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.saveTasksToLocalStorage();
    }
   }

   updateTask(task: Task) {
    // Find and update the task by ID
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(task: Task) {
    // Filter out the task to delete by ID
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.saveTasksToLocalStorage();
  }

   private loadTasksFromLocalStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    this.tasks = storedTasks;
  }

  private saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
