import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthorService} from './services/authors.service';
import {MyHelpoutsTobBarComponent} from './components/topbar.component/topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MyHelpoutsTobBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
