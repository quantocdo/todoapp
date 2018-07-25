import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { SearchPipe } from './search.pipe';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    SearchPipe,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
