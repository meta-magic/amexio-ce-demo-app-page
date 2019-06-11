

import { Routes } from '@angular/router';
import { ceDemoAppComponent } from './app/ce-demo-app/ceDemoApp.component';
export const APP_ROUTE: Routes = [
    {
        path: '', redirectTo: 'ce-demo-app', pathMatch: 'full',
    },
    {
        path: 'ce-demo-app', component: ceDemoAppComponent,
    }
];
