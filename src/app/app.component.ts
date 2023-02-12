import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { fromEvent, map, tap } from 'rxjs';

const SCROLL_LIMIT = 100;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isSmallScreen: boolean = false;
  isHideMenuTitle: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.scrollEvent();
  }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)']).pipe(
      map((res) => res.matches)
    ).subscribe((matches) => this.isSmallScreen = matches)
  }

  public getSidenavMode() {
    return this.isSmallScreen ? 'over' : 'side';
  }

  public scrollEvent() {
    const obs$ = fromEvent(document, 'scroll');

    obs$.subscribe((res: any) => {
      this.determineHeader();
    });
  }

  public determineHeader(): void {
    var y = window.pageYOffset;

    if (y >= SCROLL_LIMIT) {
      this.isHideMenuTitle = true;
    } else {
      this.isHideMenuTitle = false;
    }
  }

}

