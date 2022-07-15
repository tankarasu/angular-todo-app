// Angular core module requirements
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Angular material module requirements
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';

// Internals requirements
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './components/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
