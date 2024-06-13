import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KernelfeetService {

  private isAndroid: boolean;
  private isIos: boolean;
  private isSafari: boolean;

  private isAuthenticated: boolean;

  private isFootLeft: boolean;
  private isFootRight: boolean;

  private isSheetA4: boolean;
  private isSheetUS: boolean;



  constructor() { 
    this.isAndroid = false;
    this.isIos = false;
    this.isSafari = false;

    this.isAuthenticated = false;

    this.isFootLeft = false;
    this.isFootRight = false;

    this.isSheetA4 = false;
    this.isSheetUS = false;
  }


  public set_isAndroid(val: boolean){
    this.isAndroid = val;
  }
  public set_isIos(val: boolean){
    this.isIos = val;
  }
  public set_isSafari(val: boolean){
    this.isSafari = val;
  }

  public is_android(): boolean{
    return this.isAndroid;
  }
  public is_ios(): boolean{
    return this.isIos;
  }
  public is_safari(): boolean{
    return this.isSafari;
  }


  public set_isAuthenticated(val: boolean){
    this.isAuthenticated = val;
  }
  public is_authenticated(): boolean{
    return this.isAuthenticated;
  }

  public set_isFootLeft(val: boolean){
    this.isFootLeft = val;
  }
  public is_footLeft(): boolean{
    return this.isFootLeft;
  }

  public set_isFootRight(val: boolean){
    this.isFootRight = val;
  }
  public is_footRight(): boolean{
    return this.isFootRight;
  }

  public set_isSheetA4(val: boolean){
    this.isSheetA4 = val;
  }
  public is_sheetA4(){
    return this.isSheetA4;
  }

  public set_isSheetUS(val: boolean){
    this.isSheetUS = val;
  }
  public is_sheetUS(){
    return this.isSheetUS;
  }

}
