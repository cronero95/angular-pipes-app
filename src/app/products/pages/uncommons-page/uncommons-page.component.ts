import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommons-page',
  templateUrl: './uncommons-page.component.html',
  styles: ``
})
export class UncommonsPageComponent {
  // i18nSelect Pipe
  public name: string = 'Juan Pablo';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    'male': 'Mr',
    'female': 'Mrs'
  }

  changeClient(): void {
    this.name = 'Isabela';
    this.gender = 'female';
  }

  // i18nPlural and slice Pipes
  public clients: string[] = [
    'Maria', 'Juan', 'Pierre', 'Felipe', 'Isabela', 'Pablo'
  ]

  public clientsMap = {
    '=0': 'there is no clients',
    '=1': 'there is a client',
    'other': 'there are # clients'
  }

  serveClient(): void {
    this.clients.shift();
  }

  // json and keyvalue Pipes
  public person = {
    name: 'Juan',
    age: 28,
    address: 'Cali, Colombia'
  }

  // async Pipe
  public myObservableTimer: Observable<number> = interval(2000)
    .pipe(
      tap(value => console.log('tap:', value))
    );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('The promise got data');
      console.log('promise')
    }, 3500);
  });
}
