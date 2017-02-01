import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector : 'my-app',
    template : `<h1>{{title}}</h1>
                
                <nav>
                    <a routerLink="/dashboard" routerLinkActive="active" >Dashboard</a>
                    <a routerLink="/heroes" routerLinkActive="active" >Heros</a>
                </nav>
                <router-outlet></router-outlet>
               
                `,
    styleUrls:['./app.component.css'],
    
    
                 // <my-heroes></my-heroes>
})
export class AppComponent{
    name = 'Shri Ram';
    title = 'Tour of Heroes';
}