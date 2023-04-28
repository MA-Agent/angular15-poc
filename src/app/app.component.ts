import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'olb-login-footer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular15-poc' ;
  public isprod = environment.production;

}
