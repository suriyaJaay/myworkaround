import { Directive,ElementRef, Renderer2, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
@Directive({
  selector: '[MyCustomStyle]'
})
export class MyCustomStyleDirective {

    constructor(elm : ElementRef, renderer2:Renderer2) {
    renderer2.setStyle(elm.nativeElement, 'background', 'url(assets/img/a.jpg)')
//  renderer2.setStyle(elm.nativeElement, 'background', 'http://ppcdn.500px.org/75319705/1991f76c0c6a91ae1d23eb94ac5c7a9f7e79c480/2048.jpg)')
    renderer2.setStyle(elm.nativeElement,'background-repeat', 'no-repeat');
    renderer2.setStyle(elm.nativeElement,'background-size', 'cover');
    renderer2.setStyle(elm.nativeElement,'height', '-webkit-fill-available');
    renderer2.setStyle(elm.nativeElement,'width', '-webkit-fill-available');
    renderer2.setStyle(elm.nativeElement,'background-attachment', 'fixed');
    renderer2.setStyle(elm.nativeElement,'background-position', ' center center');
    renderer2.setStyle(elm.nativeElement, '-webkit-background-size','cover');
    renderer2.setStyle(elm.nativeElement, 'moz-background-size','cover');
    renderer2.setStyle(elm.nativeElement, '-o-background-size','cover');      
   }
}