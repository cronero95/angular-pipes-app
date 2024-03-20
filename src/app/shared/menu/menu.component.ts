import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Hello', icon: 'pi pi-fw pi-plus'},
      {label: 'World', icon: 'pi pi-fw pi-plus'}
    ]
  }
}
