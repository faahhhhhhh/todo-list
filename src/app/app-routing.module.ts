import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { TaskService } from './task.service';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })

@NgModule({
  providers: [TaskService],
  // ...
})

export class AppRoutingModule { }
