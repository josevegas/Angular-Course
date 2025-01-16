import { Routes } from '@angular/router';
import { WebdesingComponent } from './components/webdesing/webdesing.component';
import {OrgdesingComponent} from './components/orgdesing/orgdesing.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Mi Nombre',
    },
    {
        path: '/disenoweb',
        component: WebdesingComponent,
        title: 'Diseño Web',
    },
    {
        path: '/diseno-organizacional',
        component: OrgdesingComponent,
        title: "Diseño Organizacional"
    }
];
