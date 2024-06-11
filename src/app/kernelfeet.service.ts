import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KernelfeetService {

  private isAndroid: boolean;
  private isIos: boolean;
  private isSafari: boolean;

  constructor() { 
    this.isAndroid = false;
    this.isIos = false;
    this.isSafari = false;
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


}
