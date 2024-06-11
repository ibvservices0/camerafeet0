import { Component, OnInit, OnDestroy } from '@angular/core';
import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { KernelfeetService } from '../kernelfeet.service';




@Component({
  selector: 'app-screen06',
  templateUrl: './screen06.component.html',
  styleUrl: './screen06.component.css'
})
export class Screen06Component implements OnInit, OnDestroy {

  constructor(private router: Router, public global_service: KernelfeetService){}

  ngOnInit(){}

  ngOnDestroy(){}

  public toAction() {
    console.log("TAGG::Screen06::toAction");
  }

}
