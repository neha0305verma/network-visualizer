import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DashboardV2RoutingModule } from './dashboard-v2-routing.module';
import { MainComponent } from './components/main-v2/main.component';
import { GraphVisualizerComponent } from './components/graph-v2-visualizer/graph-visualizer.component';
import { DashboardSidebarComponent } from './components/dashboard-v2-sidebar/dashboard-sidebar.component';
import { DashboardHeaderComponent } from './components/dashboard-v2-header/dashboard-header.component';

import {SuiSelectModule, SuiModule} from 'ng2-semantic-ui';
import { SharedModule } from '../shared/shared.module';
import { ColorPanelComponent } from './components/color-panel/color-panel/color-panel.component';
import { CreateNodesComponent } from './components/create-nodes/create-nodes.component';

@NgModule({
  declarations: [MainComponent, GraphVisualizerComponent, DashboardSidebarComponent, DashboardHeaderComponent, 
    ColorPanelComponent, CreateNodesComponent],
  imports: [
    CommonModule,
    FormsModule,
    SuiSelectModule, SuiModule,
    SharedModule,
    DashboardV2RoutingModule
  ],
  exports: [CreateNodesComponent]
})
export class DashboardModule { }
