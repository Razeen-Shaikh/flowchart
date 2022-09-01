import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowchartComponent } from './flowchart/flowchart.component';
import { StartStopComponent } from './start-stop/start-stop.component';
import { StatementComponent } from './statement/statement.component';
import { LoopComponent } from './loop/loop.component';
import { ConditionComponent } from './condition/condition.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowchartComponent,
    StartStopComponent,
    StatementComponent,
    LoopComponent,
    ConditionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
