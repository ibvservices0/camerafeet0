import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { KernelfeetService } from '../kernelfeet.service';


import { HostListener } from '@angular/core';


@Component({
  selector: 'app-screen05',
  templateUrl: './screen05.component.html',
  styleUrl: './screen05.component.css'
})
export class Screen05Component implements OnInit, OnDestroy {

  public isPortrait: boolean = true;

  constructor(private router: Router, public global_service: KernelfeetService){}

  ngOnInit(){}

  ngOnDestroy(){}

  public toScreen06() {
    console.log("TAGG::Screen05::toScreen06");
    this.router.navigateByUrl('/screen06');
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
