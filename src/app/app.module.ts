import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AmexioWidgetModule } from 'amexio-ng-extensions'; // Import Amexio library
import { HttpClientModule } from '@angular/common/http';
import { APP_ROUTE } from 'src/app.routes';
import { ceDemoAppComponent } from './ce-demo-app/ceDemoApp.component';


@NgModule({
  declarations: [
    AppComponent,
    ceDemoAppComponent
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
