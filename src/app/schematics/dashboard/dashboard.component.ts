import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { from } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Ethical Hacking', cols: 2, rows: 1 },
        { title: 'Penetration Testing', cols: 1, rows: 1 },
        { title: 'Cyber Security', cols: 1, rows: 2 },
        { title: 'Infornation Security', cols: 1, rows: 1 }
      ];
    })
  );
  arrImages: any;

  
  constructor(private breakpointObserver: BreakpointObserver,
    private httpService: HttpClient) {
    // this.httpService.get('./images.json').subscribe(
    //   data => {
    //      console.log(data);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log (err.message);
    //   }
    // );
  }
}
