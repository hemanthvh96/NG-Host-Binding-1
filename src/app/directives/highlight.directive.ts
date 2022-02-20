import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlight]',
})

// Here in the selector if you use 'highlight' then that means that in HTML it will find the selector highlight.
// If we use [highlight] that means we are looking for an attribute called highlight on a HTML Element.
export class HighlightDirective {
  // Here inside the brackets you need to pass either DOM property or element attribute. In this case 'class' is passed @HostBinding('class') which is an attribute. And you need to use getter and return the what class you want to apply on the host element. This is called Class Map Binding

  @HostBinding('class')
  get addClass() {
    return 'addColor-green addBg-light';
  }

  // Here inside the brackets you need to pass either DOM property or element attribute. In this case 'style' is passed @HostBinding('style') which is an attribute. And you need to use getter and return the what style you want to apply on the host element. If you are seeting the single style or multiple style you need to return an object with the styles. This is called Style Map Binding

  @HostBinding('style')
  get addStyle() {
    return { padding: '1rem', border: '1px solid black' };
  }

  // Here inside the brackets you need to pass either DOM property or element attribute. In this case 'class.addUnderline' is passed @HostBinding('class.addUnderline') which is an specific class. And you need to use getter and return the boolean whether you want to set the addUnderline class on the host element. This is called Class Property Binding. You are binding to a specific class

  @HostBinding('class.addUnderline')
  get addUnderlineClass() {
    return true;
  }

  // Here inside the brackets you need to pass either DOM property or element attribute. In this case 'style.border-radius' is passed @HostBinding('style.border-radius') which is an actual border-radius style. And you need to use getter and return the value (10px) you want to apply on the host element. This is called Style Property Binding. You are binding to a specific style

  @HostBinding('style.border-radius')
  get addBorderRadius() {
    return '10px';
  }

  @HostBinding('class.alignText')
  get addTextAlign() {
    return false;
  }
}
