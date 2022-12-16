import { Component, OnInit, VERSION } from '@angular/core';
import 'particles.js/particles';
const particlesJS = (<any>window).particlesJS;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    particlesJS.load('particles-js', '/assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
