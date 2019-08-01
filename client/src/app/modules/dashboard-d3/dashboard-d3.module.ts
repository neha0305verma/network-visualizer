import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphD3VisualizerComponent } from './components/graph-d3-visualizer/graph-d3-visualizer.component';
import { MainD3Component } from './components/main-d3/main-d3.component';
import { DashboardD3RoutingModule } from './dashboard-d3-routing.module';
import { CoreModule } from '../core/core.module';
import { DashboardModule } from '../dashboard-v2/dashboard-v2.module';

@NgModule({
  declarations: [GraphD3VisualizerComponent, MainD3Component],
  imports: [
    CommonModule,
    DashboardD3RoutingModule,
    CoreModule,
    DashboardModule

  ]
})
export class DashboardD3Module { }
