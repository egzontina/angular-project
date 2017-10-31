import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { LokiService } from './loki/loki.service';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgxPaginationModule
  ],
  providers: [LokiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
