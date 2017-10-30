import { Component } from '@angular/core';

export class Hero {
//public id: number;
public name: string;
}

@Component({
  selector: 'app-root',
  template: `<div>
            <h1>{{ title }}</h1>
            <!--<h2>{{ myHero.name }} details</h2>-->
            <h2>My Favorite Heroes are : {{ myHero.name }}</h2>
            <ul>
              <li  *ngFor="let hero of heroes">
                {{ hero.name }}
              </li>
            </ul>
            </div>`
            
})
export class AppComponent {

title = 'Tour of Angular';
heroes = [{id:1,name:'Windstorm'},{id:2, name:'Bombasto'} , {id:1, name:'Magneta'}, {id:1,name:'Tornado'}];
  myHero = this.heroes[3];

  // hero = 'Angular 2';
 /*Hero : hero[]= [
   { id : 1, name : 'Ammu'}
 ];*/
/*hero: Hero = {
id: 1,
name: 'Ammu'

};*/
//heroes = HEROES;

}

