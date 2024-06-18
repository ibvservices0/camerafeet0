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


import { HostListener } from '@angular/core';


@Component({
  selector: 'app-screen02',
  templateUrl: './screen02.component.html',
  styleUrl: './screen02.component.css'
})
export class Screen02Component implements OnInit, OnDestroy {

  public isLandscape: boolean = false;

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


  public mytext_app;
  public mytext_autorizando;
  public mytext_autorizadoOk;
  public mytext_autorizadoError;
  public mytext_left;
  public mytext_right;
  public mytext_threePhotos;
  public mytext_firstPhotoIs;
  public mytext_secondPhotoIs;
  public mytext_thirdPhotoIs;
  public mytext_firstMobileInLandscape;
  public mytext_selectFoot;
  public mytext_notAuthorizedToContinue;

  
  constructor(private router: Router, public global_service: KernelfeetService, private http: HttpClient){
    this.mytext_app = global_service.text_app();
    this.mytext_autorizando = global_service.text_autorizando();
    this.mytext_autorizadoOk = global_service.text_autorizadoOk();
    this.mytext_autorizadoError = global_service.text_autorizadoError();
    this.mytext_left = global_service.text_left();
    this.mytext_right = global_service.text_right();
    this.mytext_threePhotos = global_service.text_threePhotos();
    this.mytext_firstPhotoIs = global_service.text_firstPhotoIs();
    this.mytext_secondPhotoIs = global_service.text_secondPhotoIs();
    this.mytext_thirdPhotoIs = global_service.text_thirdPhotoIs();
    this.mytext_firstMobileInLandscape = global_service.text_firstMobileInLandscape();
    this.mytext_selectFoot = global_service.text_selectFoot();
    this.mytext_notAuthorizedToContinue = global_service.text_notAuthorizedToContinue();
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
    if (!this.global_service.is_authenticated()){
      alert(this.mytext_notAuthorizedToContinue);
    }
    else if(!this.isLandscape){
      alert(this.mytext_firstMobileInLandscape);
    }
    else{
      this.global_service.set_isSheetUS(false);
      this.global_service.set_isSheetA4(true);  //ATENCION-FAKE
      this.global_service.set_isFootLeft(true);
      this.global_service.set_isFootRight(false);
      this.router.navigateByUrl('/screen03');
    }
  }

  public actionScreen02right() {
    console.log("TAGG::Screen02::actionScreen02right");
    //alert('Right');
    //this.dato = localStorage.getItem('feet_accesstoken');
    if (!this.global_service.is_authenticated()){
      alert(this.mytext_notAuthorizedToContinue);
    }
    else if(!this.isLandscape){
      alert(this.mytext_firstMobileInLandscape);
    }
    else{
      this.global_service.set_isSheetUS(false);
      this.global_service.set_isSheetA4(true);  //ATENCION-FAKE
      this.global_service.set_isFootRight(true);
      this.global_service.set_isFootLeft(false);
      this.router.navigateByUrl('/screen03');
    }
  }


  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event: Event) {
    if (this.global_service.is_android()){
      if (screen.orientation.type.includes('portrait')){this.isLandscape = false;}
      else if (screen.orientation.type.includes('landscape')){this.isLandscape = true;}
      else {this.isLandscape = false;}
    }
    else if (this.global_service.is_ios()){
      //orientation-Changed-iPHONE
      if (window.innerHeight > window.innerWidth){this.isLandscape = true;}
      else {this.isLandscape = false;}
    }
    else if (this.global_service.is_safari()){
      //orientation-Changed-iPAD
      if (window.innerHeight > window.innerWidth){this.isLandscape = true;}
      else {this.isLandscape = false;}
    }
    else{
      console.log('orientation-Changed');
    }
  }

}
