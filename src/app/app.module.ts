import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions'; // Import Amexio library
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTE } from 'src/app/app.routes';
import { ceDemoAppComponent } from './ce-demo-app/ceDemoApp.component';
import { MenuOneComponent } from './creative-menu1/menu1.component';
import { MenuTwoComponent } from './creative-menu2/menu2.component';
import { MenuThreeComponent } from './creative-menu3/menu3.component';
import { ViewportComponent } from './viewport/viewport.component';
import { ViewportComponent2 } from './viewport2/viewport2.component';
import { ViewportComponent3 } from './viewport3/viewport3.component';


@NgModule({
  declarations: [
    AppComponent,
    ceDemoAppComponent,
    MenuOneComponent,
    MenuTwoComponent,
    MenuThreeComponent,
    ViewportComponent,
    ViewportComponent2,
    ViewportComponent3
  ],
  imports: [
    BrowserModule,
    AmexioWidgetModule, HttpClientModule,
    RouterModule.forRoot(APP_ROUTE, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
