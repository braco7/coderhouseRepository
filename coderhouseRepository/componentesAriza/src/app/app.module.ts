import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DynamicModule } from './dynamic/dynamic.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
