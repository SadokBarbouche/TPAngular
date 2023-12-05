import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrComponentlessModule } from 'ngx-toastr';
import { ROUTING } from './app.routes';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ToastrModule.forRoot(), ROUTING],
})
export class AppModule {}
