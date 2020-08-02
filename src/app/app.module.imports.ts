import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { NgxsModule } from '@ngxs/store';
import { config } from '../environments/config';
import { HttpClientModule } from '@angular/common/http';




export const imports = [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(config.firebase),
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
    }),
];
