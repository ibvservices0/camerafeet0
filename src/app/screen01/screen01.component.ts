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

  public mytext_app: string;
  public mytext_es: string;
  public mytext_en: string;
  public mytext_selectLanguage01: string;
  public mytext_selectLanguage02: string;



  constructor(private router: Router, public global_service: KernelfeetService, private platform: Platform){
    if (this.platform.ANDROID) {this.global_service.set_isAndroid(true);}
    else if (this.platform.IOS){this.global_service.set_isIos(true);}
    else if (this.platform.SAFARI){this.global_service.set_isSafari(true);}

    this.mytext_app = global_service.text_app();
    this.mytext_es = global_service.text_es();
    this.mytext_en = global_service.text_en();
    this.mytext_selectLanguage01 = global_service.text_selectLanguage01();
    this.mytext_selectLanguage02 = global_service.text_selectLanguage02();
  }

  ngOnInit(){}

  ngOnDestroy(){}


  public toScreen02es() {
    this.global_service.set_isEnglish(false);
    permissionacel.permission_accelerometers();
    this.router.navigateByUrl('/screen02');
  }

  public toScreen02en() {
    this.global_service.set_isEnglish(true);
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
