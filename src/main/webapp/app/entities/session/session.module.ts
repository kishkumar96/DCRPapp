import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TrainingApplicationSharedModule } from 'app/shared/shared.module';
import { SessionComponent } from './session.component';
import { SessionDetailComponent } from './session-detail.component';
import { SessionUpdateComponent } from './session-update.component';
import { SessionDeleteDialogComponent } from './session-delete-dialog.component';
import { sessionRoute } from './session.route';

@NgModule({
  imports: [TrainingApplicationSharedModule, RouterModule.forChild(sessionRoute)],
  declarations: [SessionComponent, SessionDetailComponent, SessionUpdateComponent, SessionDeleteDialogComponent],
  entryComponents: [SessionDeleteDialogComponent]
})
export class TrainingApplicationSessionModule {}
