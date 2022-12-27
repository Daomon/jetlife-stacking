import { Component, OnInit, VERSION } from '@angular/core';
import Particles from 'particlesjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    Particles.init({
      selector: '#background',
      maxParticles:150,
      color: '#464386',
      connectParticles: true,
    // options for breakpoints
      responsive: [
        {
          breakpoint: 320,
          options: {
            maxParticles: 75 // disables particles.js
          }
        }
      ]
    }); 
  }
}
