import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TrainingApplicationSharedModule } from 'app/shared/shared.module';
import { TrainingApplicationCoreModule } from 'app/core/core.module';
import { TrainingApplicationAppRoutingModule } from './app-routing.module';
import { TrainingApplicationHomeModule } from './home/home.module';
import { TrainingApplicationEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TrainingApplicationSharedModule,
    TrainingApplicationCoreModule,
    TrainingApplicationHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TrainingApplicationEntityModule,
    TrainingApplicationAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class TrainingApplicationAppModule {}
