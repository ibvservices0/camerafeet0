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

  private isEnglish: boolean;



  constructor() { 
    this.isAndroid = false;
    this.isIos = false;
    this.isSafari = false;

    this.isAuthenticated = false;

    this.isFootLeft = false;
    this.isFootRight = false;

    this.isSheetA4 = false;
    this.isSheetUS = false;

    this.isEnglish = false;
  }


  public set_isEnglish(val: boolean){
    this.isEnglish = val;
  }
  public is_english(){
    return this.isEnglish;
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



  public text_app(){
    return 'SCANFEET';
  }
  public text_es(){
    return 'Es';
  }
  public text_en(){
    return 'En'
  }
  public text_selectLanguage01(){
    return 'SELECCIONA IDIOMA - SELECT LANGUAGE';
  }
  public text_selectLanguage02(){
    return 'Es = ESPAÑOL   ,   En = ENGLISH';
  }
  public text_autorizando(){
    if (this.isEnglish) return 'Authorizing...';
    return 'Autorizando...';
  }
  public text_autorizadoOk(){
    if (this.isEnglish) return 'Authorized OK';
    return 'Autorizado OK';
  }
  public text_autorizadoError(){
    if (this.isEnglish) return 'ERROR in authorization';
    return 'ERROR en autorización';
  }
  public text_left(){
    if (this.isEnglish) return 'Left';
    return 'Izquierdo';
  }
  public text_right(){
    if (this.isEnglish) return 'Right';
    return 'Derecho';
  }
  public text_threePhotos(){
    if (this.isEnglish) return 'You will make 3 photos of the foot';
    return 'Vas a hacer 3 fotos del pie';
  }
  public text_firstPhotoIs(){
    if (this.isEnglish) return 'First photo of the inner side';
    return 'Primera foto de la parte interior';
  }
  public text_secondPhotoIs(){
    if (this.isEnglish) return 'Second photo of the top side';
    return 'Segunda foto de la parte superior';
  }
  public text_thirdPhotoIs(){
    if (this.isEnglish) return 'Third photo of the outer side';
    return 'Tercera foto de la parte exterior';
  }
  public text_firstMobileInLandscape(){
    if (this.isEnglish) return 'FIRST PUT MOBILE IN LANDSCAPE';
    return 'PRIMERO PON EL MOVIL EN APAISADO';
  }
  public text_selectFoot(){
    if (this.isEnglish) return 'And then select foot';
    return 'Y luego selecciona pie';
  }
  public text_notAuthorizedToContinue(){
    if (this.isEnglish) return 'Not authorized to continue';
    return 'No está autorizado para poder continuar';
  }
  public text_sideInner(){
    if (this.isEnglish) return 'INNER';
    return 'INTERIOR';
  }
  public text_sideTop(){
    if (this.isEnglish) return 'TOP';
    return 'SUPERIOR';
  }
  public text_sideOuter(){
    if (this.isEnglish) return 'OUTER';
    return 'EXTERIOR';
  }
  public text_repeat(){
    if (this.isEnglish) return 'Repeat';
    return 'Repetir';
  }
  public text_confirm(){
    if (this.isEnglish) return 'Confirm';
    return 'Confirmar';
  }

}
