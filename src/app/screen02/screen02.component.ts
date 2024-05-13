import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { KernelfeetService } from '../kernelfeet.service';

@Component({
  selector: 'app-screen02',
  templateUrl: './screen02.component.html',
  styleUrl: './screen02.component.css'
})
export class Screen02Component implements OnInit, OnDestroy {

  constructor(private router: Router, public kernelfeet_service: KernelfeetService){}

  ngOnInit(){}

  ngOnDestroy(){}

  public actionScreen02() {
    console.log("TAGG::Screen02::actionScreen02");
  }

}
