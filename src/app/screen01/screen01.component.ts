import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { KernelfeetService } from '../kernelfeet.service';


@Component({
  selector: 'app-screen01',
  templateUrl: './screen01.component.html',
  styleUrl: './screen01.component.css'
})
export class Screen01Component implements OnInit, OnDestroy {

  constructor(private router: Router, public kernelfeet_service: KernelfeetService){}

  ngOnInit(){}

  ngOnDestroy(){}


  public toScreen02() {
    console.log("TAGG::Screen01::toScreen02");
    this.router.navigateByUrl('/screen02');
  }

}
