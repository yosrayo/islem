import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layouts.routing';
import { AccueilComponent } from 'src/app/pages/accueil/accueil.component';
import { ChartsComponent } from 'src/app/pages/charts/charts.component';
import { TableComponent } from 'src/app/pages/table/table.component';
import { NotFoundComponent } from 'src/app/pages/not-found/not-found.component';
import { BlankPageComponent } from 'src/app/pages/blank-page/blank-page.component';
import { ButtonsComponent } from 'src/app/pages/buttons/buttons.component';
import { CardsComponent } from 'src/app/pages/cards/cards.component';
import { ColorsComponent } from 'src/app/pages/colors/colors.component';
import { BordersComponent } from 'src/app/pages/borders/borders.component';
import { AnimationsComponent } from 'src/app/pages/animations/animations.component';
import { OtherComponent } from 'src/app/pages/other/other.component';



@NgModule({
  declarations: [
    AccueilComponent,
     ChartsComponent,
    TableComponent,
    NotFoundComponent,
    BlankPageComponent,
    ButtonsComponent,
    CardsComponent,
    ColorsComponent,
    BordersComponent,
    AnimationsComponent,
    OtherComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
   
  ]
})
export class AdminLayoutsModule { }
