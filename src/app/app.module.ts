import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputDataComponent } from './input-data/input-data.component';
import { InputSexoComponent } from './input-sexo/input-sexo.component';
import { InputCorComponent } from './input-cor/input-cor.component';
import { InputHobbiesComponent } from './input-hobbies/input-hobbies.component';
import { InputUfComponent } from './input-uf/input-uf.component';
import { InputButtonComponent } from './input-button/input-button.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputEmailComponent,
    InputDataComponent,
    InputSexoComponent,
    InputCorComponent,
    InputHobbiesComponent,
    InputUfComponent,
    InputButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
