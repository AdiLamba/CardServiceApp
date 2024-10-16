import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MaterialModule } from './modules/material-ui.module';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule, Routes } from '@angular/router';
import { AceLambaadComponent } from './ace-lambaad/ace-lambaad.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardLambaadService } from './card-lambaad.service';
import { FooterLambaadComponent } from './footer-lambaad/footer-lambaad.component';
import { HeaderLambaadComponent } from './header-lambaad/header-lambaad.component';
import { JackLambaadComponent } from './jack-lambaad/jack-lambaad.component';
import { KingLambaadComponent } from './king-lambaad/king-lambaad.component';
import { QueenLambaadComponent } from './queen-lambaad/queen-lambaad.component';

const myRoutes: Routes = [
  {path: '', component: AceLambaadComponent},
  {path: 'ace', component: AceLambaadComponent},
  {path: 'king', component: KingLambaadComponent},
  {path: 'queen', component: QueenLambaadComponent},
  {path: 'jack', component: JackLambaadComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderLambaadComponent,
    FooterLambaadComponent,
    AceLambaadComponent,
    KingLambaadComponent,
    QueenLambaadComponent,
    JackLambaadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    CardLambaadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
