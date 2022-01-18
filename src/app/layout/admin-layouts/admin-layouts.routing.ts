import { Routes } from "@angular/router";
import { AccueilComponent } from "src/app/pages/accueil/accueil.component";
import { AnimationsComponent } from "src/app/pages/animations/animations.component";
import { BlankPageComponent } from "src/app/pages/blank-page/blank-page.component";
import { BordersComponent } from "src/app/pages/borders/borders.component";
import { ButtonsComponent } from "src/app/pages/buttons/buttons.component";
import { CardsComponent } from "src/app/pages/cards/cards.component";
import { ChartsComponent } from "src/app/pages/charts/charts.component";
import { ColorsComponent } from "src/app/pages/colors/colors.component";
import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";
import { OtherComponent } from "src/app/pages/other/other.component";
import { TableComponent } from "src/app/pages/table/table.component";
import { SidebarComponent } from "src/app/sidebar/sidebar.component";

export const AdminLayoutRoutes: Routes = [
    { path: 'sidebar',      component: SidebarComponent },
    { path: 'accueil',      component: AccueilComponent },
    { path: 'charts',      component: ChartsComponent },
    { path: 'table',      component: TableComponent },
    { path: 'notFound',      component: NotFoundComponent },
    { path: 'Blank',      component: BlankPageComponent },
    { path: 'button',      component: ButtonsComponent },
    { path: 'card',      component: CardsComponent },
    { path: 'color',      component: ColorsComponent },
    { path: 'border',      component: BordersComponent },
    { path: 'animation',      component: AnimationsComponent },
    { path: 'other',      component: OtherComponent },

];
