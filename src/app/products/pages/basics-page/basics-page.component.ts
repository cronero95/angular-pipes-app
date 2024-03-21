import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  templateUrl: './basics-page.component.html',
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = 'juan pablo';
  public nameUpper: string = 'JUAN PABLO';
  public fullName: string = 'JUan pABLo aRiaS';

  public customDate: Date = new Date();
}
