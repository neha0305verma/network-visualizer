import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { MainD3Component } from "./components/main-d3/main-d3.component";

const routes: Routes = [
  { path: "", component: MainD3Component, data: { title: "dashboard" } }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardD3RoutingModule { }
