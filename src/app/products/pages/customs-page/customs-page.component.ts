import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-customs-page',
  templateUrl: './customs-page.component.html',
  styles: ``
})
export class CustomsPageComponent {

  public isUpperCase: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'Hulk',
      canFly: false,
      color: Color.green
    },
    {
      name: 'Super Girl',
      canFly: true,
      color: Color.white
    },
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Black Widow',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }
}
