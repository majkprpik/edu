import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DavorComponent } from './davor/davor.component';
import { SenkovicComponent } from './senkovic/senkovic.component';
import { AndreaComponent } from './andrea/andrea.component';
import { FilipComponent } from './filip/filip.component';
import { TestComponent } from './test/test.component';
import { GoranComponent } from './goran/goran.component';
import { IvanComponent } from './ivan/ivan.component';
import { DenisComponent } from './denis/denis.component';
import { NemanjaComponent } from './nemanja/nemanja.component';
import { AnaComponent } from './ana/ana.component';
import { JankoComponent } from './janko/janko.component';
import { MiroslavComponent } from './miroslav/miroslav.component';
import { ZdravkoComponent } from './zdravko/zdravko.component';
import { HrvojeComponent } from './hrvoje/hrvoje.component';
import { MajaComponent } from './maja/maja.component';
import { TestChildComponent } from './test/test-child/test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FilipComponent,
    DavorComponent,
    SenkovicComponent,
    AndreaComponent,
    TestComponent,
    GoranComponent,
    IvanComponent,
    DenisComponent,
    NemanjaComponent,
    AnaComponent,
    JankoComponent,
    MiroslavComponent,
    ZdravkoComponent,
    HrvojeComponent,
    MajaComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
