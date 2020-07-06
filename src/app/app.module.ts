import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { imports } from './app.module.imports';
import { declarations } from './app.module.declarations';
import { providers } from './app.module.providers';

registerLocaleData(en);

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  providers: [...providers],
  bootstrap: [AppComponent]
})
export class AppModule { }
