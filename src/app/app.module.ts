import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavsideComponent } from './navi/navside.component';
import { NavtopComponent } from './navi/navtop.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SummaryComponent } from './pages/dashboard/panels/summary.component';
import { AreachartComponent } from './pages/dashboard/panels/areachart.component';
import { BarchartComponent } from './pages/dashboard/panels/barchart.component';
import { TimelineComponent } from './pages/dashboard/panels/timeline.component';
import { NotifyComponent } from './pages/dashboard/panels/notify.component';
import { DonutComponent } from './pages/dashboard/panels/donut.component';
import { ChatComponent } from './pages/dashboard/panels/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    NavsideComponent,
    NavtopComponent,
    DashboardComponent,
    SummaryComponent,
    AreachartComponent,
    BarchartComponent,
    TimelineComponent,
    NotifyComponent,
    DonutComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
