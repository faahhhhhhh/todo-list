import { Component } from '@angular/core';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  tasks: Task[] = [];
  newTaskDescription: string = '';
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  saveTask() {
    if (this.newTaskDescription.trim() === '') {
      return; 
    }

    if (this.editingTask) {
      this.editingTask.description = this.newTaskDescription;
      this.taskService.updateTask(this.editingTask);
    } else {
      const newTask: Task = { id: Date.now(), description: this.newTaskDescription, completed: false };
      this.taskService.addTask(newTask);
      this.tasks.push(newTask);
    }

    this.newTaskDescription = '';
    this.editingTask = null;
  }

  editTask(task: Task) {
    if (task.description) {
      this.newTaskDescription = task.description;
    } else {
      this.newTaskDescription = ''; 
    }
    this.editingTask = task;
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task);
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
