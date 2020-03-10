import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

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

import { PodebljajDirective } from './test/directive/podebljaj.directive';
import { ZelenaPozadinaDirective } from './test/directive/zelena-pozadina.directive';
import { BoldMouseOverDirective } from './test/directive/bold-mouse-over.directive';
import { ItalicMouseClickDirective } from './test/directive/italic-mouse-click.directive';
import { DirectiveWithPropertyDirective } from './test/directive/directive-with-property.directive';
import { DirectiveWithMainPropertyDirective } from './test/directive/directive-with-main-property.directive';
import { CustomStructuralDirectiveDirective } from './test/directive/custom-structural-directive.directive';
import { SetColorDirectiveDirective } from './test/directive/set-color-directive.directive';
import { HttpClientModule } from '@angular/common/http';
import { AndrejComponent } from './andrej/andrej.component';

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
    TestChildComponent,
    PodebljajDirective,
    ZelenaPozadinaDirective,
    BoldMouseOverDirective,
    ItalicMouseClickDirective,
    DirectiveWithPropertyDirective,
    DirectiveWithMainPropertyDirective,
    CustomStructuralDirectiveDirective,
    SetColorDirectiveDirective,
    AndrejComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: 'http://localhost:3000/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.DEBUG}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
