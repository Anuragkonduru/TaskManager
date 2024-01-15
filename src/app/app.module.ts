import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TaskformComponent } from './Components/taskform/taskform.component';
import { TasklistComponent } from './Components/tasklist/tasklist.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {

  ReactiveFormsModule,

} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskformComponent,
    TasklistComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
