import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphD3VisualizerComponent } from './components/graph-d3-visualizer/graph-d3-visualizer.component';
import { MainD3Component } from './components/main-d3/main-d3.component';
import { DashboardD3RoutingModule } from './dashboard-d3-routing.module';
import { CoreModule } from '../core/core.module';
import { DashboardSidebarComponent } from './components/dashboard-v2-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-v2-header/dashboard-header.component';
import { ColorPanelComponent } from './components/color-panel/color-panel/color-panel.component';
import { CreateNodesComponent } from './components/create-nodes/create-nodes.component';
import { FormsModule } from '@angular/forms';
import { SuiSelectModule, SuiModule } from 'ng2-semantic-ui';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GraphD3VisualizerComponent, MainD3Component,DashboardSidebarComponent, DashboardHeaderComponent, 
    ColorPanelComponent, CreateNodesComponent],
  imports: [
    CommonModule,
    FormsModule,
    DashboardD3RoutingModule,
    CoreModule,
    SuiSelectModule, SuiModule,
    SharedModule
   ]
})
export class DashboardD3Module { }
