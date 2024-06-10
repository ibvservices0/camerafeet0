import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { KernelfeetService } from '../kernelfeet.service';

//import * as mytest from '../../scripts/mytest.js'



@Component({
  selector: 'app-screen02',
  templateUrl: './screen02.component.html',
  styleUrl: './screen02.component.css'
})
export class Screen02Component implements OnInit, OnDestroy {

  //private dato: any;
  private divAutorizando: any;
  private divAutorizadoOk: any;
  private divAutorizadoError: any;



  constructor(private router: Router, public kernelfeet_service: KernelfeetService){}

  ngOnInit(){
    //mytest.tester();
    this.divAutorizando = document.getElementById("div_autorizando");
    this.divAutorizadoOk = document.getElementById("div_autorizado_ok");
    this.divAutorizadoError = document.getElementById("div_autorizado_error");
    this.divAutorizando.removeAttribute("hidden");
    this.divAutorizadoOk.setAttribute("hidden", "hidden");
    this.divAutorizadoError.setAttribute("hidden", "hidden");
  }

  ngOnDestroy(){}


  public actionScreen02left() {
    console.log("TAGG::Screen02::actionScreen02left");
    alert('Left');
  }

  public actionScreen02right() {
    console.log("TAGG::Screen02::actionScreen02right");
    alert('Right');
  }

}
