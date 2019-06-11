

import { Routes } from '@angular/router';
import { ceDemoAppComponent } from './ce-demo-app/ceDemoApp.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MenuOneComponent } from './creative-menu1/menu1.component';
import { MenuTwoComponent } from './creative-menu2/menu2.component';
import { MenuThreeComponent } from './creative-menu3/menu3.component';
import { ViewportComponent } from './viewport/viewport.component';
import { ViewportComponent2 } from './viewport2/viewport2.component';
import { ViewportComponent3 } from './viewport3/viewport3.component';
export const APP_ROUTE: Routes = [
    {
        path: '', redirectTo: 'landingPage-app', pathMatch: 'full',
    },
    {
        path: 'landingPage-app', component: LandingPageComponent,
    },
    {
        path: 'ce-demo-app', component: ceDemoAppComponent,
    },
    {
        path: 'menu', children: [
            {
                path: 'menu-one', component: MenuOneComponent,
            },
            {
                path: 'menu-two', component: MenuTwoComponent,
            },
            {
                path: 'menu-three', component: MenuThreeComponent,
            },

        ],
    },
    {
        path: 'viewport', children: [
            {
                path: 'viewport-one', component: ViewportComponent,
            },
            {
                path: 'viewport-two', component: ViewportComponent2,
            },
            {
                path: 'viewport-three', component: ViewportComponent3,
            },

        ],
    }
];
