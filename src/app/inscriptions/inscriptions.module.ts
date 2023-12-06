import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsEditComponent } from './components/inscriptions-edit/inscriptions-edit.component';
import { InscriptionsListComponent } from './components/inscriptions-list/inscriptions-list.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { MoreInfoInscriptionsComponent } from './components/more-info-inscriptions/more-info-inscriptions.component';


@NgModule({
  declarations: [
    InscriptionsEditComponent,
    InscriptionsListComponent,
    MoreInfoInscriptionsComponent
  ],
  imports: [
    CommonModule,
    InscriptionsRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class InscriptionsModule { }
