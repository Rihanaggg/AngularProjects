import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddcycleComponent } from './addcycle/addcycle.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CycleComponent } from './cycle/cycle.component';
import { CycleserviceService } from './cycleservice.service';

@NgModule({
  declarations: [
    AppComponent,
    CycleComponent,
    AddcycleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CycleserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
