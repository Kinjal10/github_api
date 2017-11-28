import { Component } from '@angular/core';
import { GithubUser } from './model/IGithubUser';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    public githubUser1: GithubUser;

    constructor() {
        this.githubUser1 = new GithubUser('');
    }
}
