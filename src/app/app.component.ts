import { Component } from '@angular/core';
import { AppDispatcher } from './app.dispatcher';

@Component({
  selector: 'nja-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppDispatcher]
})
export class AppComponent {}
