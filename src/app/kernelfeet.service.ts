import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KernelfeetService {

  private isAndroid: boolean;
  private isIos: boolean;
  private isSafari: boolean;

  private isAuthenticated: boolean;
  private isReconstructed: boolean;

  private isFootLeft: boolean;
  private isFootRight: boolean;

  private isSheetA4: boolean;
  private isSheetUS: boolean;

  private isEnglish: boolean;

  private feetAccesstoken: string;
  private footMeasurements: string;



  constructor() { 
    this.isAndroid = false;
    this.isIos = false;
    this.isSafari = false;

    this.isAuthenticated = false;
    this.isReconstructed = false;

    this.isFootLeft = false;
    this.isFootRight = false;

    this.isSheetA4 = false;
    this.isSheetUS = false;

    this.isEnglish = false;

    this.feetAccesstoken = '';
    this.footMeasurements = '';
  }


  public webservice_client_id(): string{
    return 'cliente1';
  }
  public webservice_client_secret(): string{
    return 'tUkSqtHjmxN3';
  }
  public webservice_username(): string{
    return 'cliente1';
  }
  public webservice_password(): string{
    return 'p9$ieE8rT';
  }
  public webservice_grant_type(): string{
    return 'password';
  }
  public webservice_license_code(): string{
    return '520401420429863485';
  }
  public webservice_device(): string{
    return 'access_preview';
  }


  public webservice_base_url(): string{
    return 'https://avatar3ddev.ibv.org/api/v1';
  }



  public set_feet_accesstoken(val: string){
    this.feetAccesstoken = val;
  }
  public feet_accesstoken(): string{
    return this.feetAccesstoken;
  }
  public set_foot_measurements(measures: string){
    this.footMeasurements = measures;
  }
  public foot_measurements(): string{
    return this.footMeasurements;
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

  public set_isReconstructed(val: boolean){
    this.isReconstructed = val;
  }
  public is_reconstructed(): boolean{
    return this.isReconstructed;
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


  public feet_sheetmodel(): string{
    if (this.isSheetUS) return '2';
    else if (this.isSheetA4) return '1';
    else return '0';
  }

  public feet_foottype(): string{
    if (this.isFootRight) return '2';
    else if (this.isFootLeft) return '1';
    else return '0';
  }




  public text_app(){
    return ' SCANFEET';
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
    if (this.isEnglish) return 'And take photos with mobile in landscape';
    return 'Y toma fotos con móvil en apaisado';
  }
  public text_selectFoot(){
    if (this.isEnglish) return 'Select right foot or left';
    return 'Selecciona pie derecho o izquierdo';
  }
  public text_notAuthorizedToContinue(){
    if (this.isEnglish) return 'Not authorized to continue';
    return 'No está autorizado para poder continuar';
  }
  public text_sideInner(){
    if (this.isEnglish) return ' INNER';
    return ' INTERIOR';
  }
  public text_sideTop(){
    if (this.isEnglish) return ' TOP';
    return ' SUPERIOR';
  }
  public text_sideOuter(){
    if (this.isEnglish) return ' OUTER';
    return ' EXTERIOR';
  }
  public text_repeat(){
    if (this.isEnglish) return 'Repeat';
    return 'Repetir';
  }
  public text_confirm(){
    if (this.isEnglish) return 'Confirm';
    return 'Confirmar';
  }
  public text_actionCustom(){
    if (this.isEnglish) return 'View measurements';
    return 'Ver medidas';
  }
  public text_reconstructionWait(){
    if (this.isEnglish) return 'Waiting for reconstruction...';
    return 'Esperando reconstrucción...';
  }
  public text_reconstructionOk(){
    if (this.isEnglish) return 'Reconstruction is OK';
    return 'Reconstrucción OK';
  }
  public text_reconstructionError(){
    if (this.isEnglish) return 'ERROR in reconstruction';
    return 'ERROR en reconstrucción';
  }
  public text_measuresNotAllowed(){
    if (this.isEnglish) return 'Failed reconstruction. Measurements are not available.';
    return 'La reconstrucción no se completó. No hay medidas disponibles.';
  }
  public text_actionRecommend(){
    if (this.isEnglish) return 'Recommend ';
    return 'Recomendar ';
  }


}
