import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-toptitle',
  templateUrl: './toptitle.component.html',
  styleUrls: ['./toptitle.component.css']
})
export class ToptitleComponent implements OnInit {

  title = '';

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.title = this.getTitle(this.router.routerState, this.router.routerState.root).join(' | ');
      });
  }

  // tslint:disable-next-line:typedef
  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(...this.getTitle(state, state.firstChild(parent)));
    }

    return data;
  }

  ngOnInit(): void {
  }

}
