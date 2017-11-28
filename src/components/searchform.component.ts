import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

import { GithubUser } from '../model/IGithubUser';

@Component({
    moduleId: module.id,
    selector: 'searchform',
    templateUrl: 'searchform.component.html'
})


export class SearchformComponent implements OnInit {
    @Input() githubUser: GithubUser;
    @Output() userUpdated: EventEmitter<GithubUser> = new EventEmitter<GithubUser>();
    public values: any;

    constructor(private _githubService: GithubService) {
    }

    ngOnInit() {


    }

    searchUser(event: any) {
        this.values = event.target.value;
        this._githubService.getUser(this.values).subscribe(user => {
                this.githubUser = user;
                this.userUpdated.emit(this.githubUser);
            },
                (err) => {
                    console.log('err:' + err);
                },
                () => console.log('Done')
            );
    }

}
