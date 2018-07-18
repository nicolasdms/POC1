import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { InfoPanelsComponent } from './info-panels/info-panels.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { CostComponent } from './cost/cost.component';
import { InfoCardsComponent } from './info-cards/info-cards.component';
import { DiskSpaceComponent } from './disk-space/disk-space.component';
import { TodoComponent } from './todo/todo.component';

// import 'hammerjs';

export const routes = [
	{ path: '', component: DashboardComponent, pathMatch: 'Full' }
];

@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
	declarations: [
		DashboardComponent,
		InfoPanelsComponent,
		VisitorsComponent,
		CostComponent,
		InfoCardsComponent,
		DiskSpaceComponent,
		TodoComponent
	]
})
export class DashboardModule {}
