import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

import { GithubUser } from '../model/IGithubUser';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {
    @Input() githubUser: GithubUser;

    constructor() {

    }

    ngOnInit() { }

}
