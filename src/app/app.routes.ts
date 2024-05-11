import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuComponent } from './features/menu/menu.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ErrorComponent } from './features/error/error.component';

export const routes: Routes = [
    {path: '',component: HomeComponent,},
    {path: 'menu',component: MenuComponent,},
    {path: 'dashboard',component: DashboardComponent,},
    {path: 'error',component: ErrorComponent,},
    {path: '**',redirectTo: '',},
];
