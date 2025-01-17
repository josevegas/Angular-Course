import { Routes } from '@angular/router';
import { WebdesingComponent } from './components/webdesing/webdesing.component';
import {OrgdesingComponent} from './components/orgdesing/orgdesing.component';
import {HomeComponent} from './components/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'disenoweb',
        component: WebdesingComponent,
    },
    {
        path: 'diseno-organizacional',
        component: OrgdesingComponent,
    }
];
