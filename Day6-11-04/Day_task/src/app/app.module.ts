import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownviewComponent } from './downview/downview.component';
import { ServicesboxComponent } from './servicesbox/servicesbox.component';
import { SliderviewComponent } from './sliderview/sliderview.component';


@NgModule({
  declarations: [
    AppComponent,
    DownviewComponent,
    ServicesboxComponent,
    SliderviewComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],//specific or include all the components .pipes and directives which
  //are part of the module
  providers: [],//services will be specified here
  bootstrap: [AppComponent]// root components
})
export class AppModule { }