import { Component } from '@angular/core';

import { Platform } from '@angular/cdk/platform';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'camerafeet0';

  constructor(private platform: Platform) {
    if (this.platform.ANDROID) {
      console.log("platform.ANDROID");
      //this.lockOrientation();
    }
    else if (this.platform.IOS){
      console.log("platform.IOS");
      //this.lockOrientation();
    }
  }

  /*
  lockOrientation() {
    if (screen.orientation?.lock) {screen.orientation.lock('landscape');}
  }
  */

  /*
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event) {
    event.preventDefault();
  }
  */


}
