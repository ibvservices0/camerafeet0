import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { KernelfeetService } from '../kernelfeet.service';


import { Platform } from '@angular/cdk/platform';
import { HostListener } from '@angular/core';

import * as permissionacel from '../../scripts/permissionacel.js'



@Component({
  selector: 'app-screen01',
  templateUrl: './screen01.component.html',
  styleUrl: './screen01.component.css'
})
export class Screen01Component implements OnInit, OnDestroy {

  public isPortrait: boolean = true;


  constructor(private router: Router, public global_service: KernelfeetService, private platform: Platform){
    if (this.platform.ANDROID) {this.global_service.set_isAndroid(true);}
    else if (this.platform.IOS){this.global_service.set_isIos(true);}
    else if (this.platform.SAFARI){this.global_service.set_isSafari(true);}
  }

  ngOnInit(){}

  ngOnDestroy(){}


  public toScreen02() {
    console.log("TAGG::Screen01::toScreen02");
    permissionacel.permission_accelerometers();
    this.router.navigateByUrl('/screen02');
  }

  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event) {
    if (this.global_service.is_android()){
      if (screen.orientation.type.includes('portrait')){this.isPortrait = true;}
      else if (screen.orientation.type.includes('landscape')){this.isPortrait = false;}
      else {this.isPortrait = true;}
    }
    else if (this.global_service.is_ios()){
      //orientation-Changed-iPHONE
      if (window.innerHeight > window.innerWidth){this.isPortrait = false;}
      else {this.isPortrait = true;}
    }
    else if (this.global_service.is_safari()){
      //orientation-Changed-iPAD
      if (window.innerHeight > window.innerWidth){this.isPortrait = false;}
      else {this.isPortrait = true;}
    }
    else{
      console.log('orientation-Changed');
    }
  }

}
