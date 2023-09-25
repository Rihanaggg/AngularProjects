import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AddNoticeComponent } from './add-notice/add-notice.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNoticesComponent } from './list-notices/list-notices.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoticeComponent,
    ListNoticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
