import { Component, OnInit, OnDestroy } from '@angular/core';
//import { from, fromEvent, Observable, throwError, Subscription } from 'rxjs';

import { Router } from '@angular/router';

import { KernelfeetService } from '../kernelfeet.service';

//import * as mytest from '../../scripts/mytest.js'
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators'
import { throwError } from 'rxjs';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { JSONloginRequest } from '../ibv-types-adhoc';



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

  /* */
  private webservice_requestLoginJson: JSONloginRequest = {
    client_id: "cliente1",
    client_secret: "tUkSqtHjmxN3",
    username: "cliente1",
    password: "p9$ieE8rT",
    grant_type: "password",
    license_code: "520401420429863485",
    device: "access_preview"
  };
  private webservice_base_url: string = "https://avatar3ddev.ibv.org/api/v1";
  /**/


  //, private http: HttpClient
  constructor(private router: Router, public global_service: KernelfeetService, private http: HttpClient){
  }


  ngOnInit(){
    //mytest.tester();
    this.webservice_login();
  }



  private webservice_login(){
    this.divAutorizando = document.getElementById("div_autorizando");
    this.divAutorizadoOk = document.getElementById("div_autorizado_ok");
    this.divAutorizadoError = document.getElementById("div_autorizado_error");
    this.divAutorizando.removeAttribute("hidden");
    this.divAutorizadoOk.setAttribute("hidden", "hidden");
    this.divAutorizadoError.setAttribute("hidden", "hidden");

    localStorage.removeItem('feet_accesstoken');
    this.global_service.set_isAuthenticated(true); //ATENCION-FAKE

    const httpOptionsZero = {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded'
      })
    };

    const localUrl = this.webservice_base_url + "/auth/authorize";

    this.http.post(localUrl, this.webservice_requestLoginJson, httpOptionsZero).subscribe(
      (value:any) => { 
        this.divAutorizando.setAttribute("hidden", "hidden");
        this.divAutorizadoOk.removeAttribute("hidden");
        localStorage.setItem('feet_accesstoken', value.access_token);
        this.global_service.set_isAuthenticated(true);
        console.log('POST response OK') },
      error => {
        this.divAutorizando.setAttribute("hidden", "hidden");
        this.divAutorizadoError.removeAttribute("hidden");
        console.log('ERROR: ' + error)}
    );

  }


  private handleErrorWSlogin(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `WS-login Error: ${error.error.message}`;
    } else {
      // Server-side errors
      //errorMessage = `WS-login Error Code: ${error.status} -- Message: ${error.message}`;
      errorMessage = `WS-login Error Code: ${error.status}`;
    }
    return errorMessage;
  }
    


  ngOnDestroy(){}


  public actionScreen02left() {
    console.log("TAGG::Screen02::actionScreen02left");
    //alert('Left');
    //this.dato = localStorage.getItem('feet_accesstoken');
    if (this.global_service.is_authenticated()){
      this.global_service.set_isSheetUS(false);
      this.global_service.set_isSheetA4(true);  //ATENCION-FAKE
      this.global_service.set_isFootLeft(true);
      this.global_service.set_isFootRight(false);
      this.router.navigateByUrl('/screen03');
    }
    else{
      alert('Not allowed to continue');
    }
  }

  public actionScreen02right() {
    console.log("TAGG::Screen02::actionScreen02right");
    //alert('Right');
    //this.dato = localStorage.getItem('feet_accesstoken');
    if (this.global_service.is_authenticated()){
      this.global_service.set_isSheetUS(false);
      this.global_service.set_isSheetA4(true);  //ATENCION-FAKE
      this.global_service.set_isFootRight(true);
      this.global_service.set_isFootLeft(false);
      this.router.navigateByUrl('/screen03');
    }
    else{
      alert('Not allowed to continue');
    }
  }

}
