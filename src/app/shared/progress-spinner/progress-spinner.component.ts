import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { interval, Observable, timer, pipe, of } from 'rxjs'
import { map, takeWhile, delay, tap, concatWith, take, concat, } from 'rxjs/operators';

interface ProgressBarBuffer {
  loadingPercent: number;
  loadingBufferPercent: number;
}

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})

export class ProgressSpinnerComponent implements OnInit {

  progressMode: ProgressBarMode = 'query';
  loadingPercent: number = 0;

  loadingPercentBuffer: ProgressBarBuffer = {} as ProgressBarBuffer;

  ngOnInit(): void {
    this.loadingProgress(500).subscribe(value => this.loadingPercent = value);
    this.loadingProgressBuffer(500).subscribe(next => {});
  }

  // Forma 1 (usando concatWith)
  public loadingProgress(speed: number) {

    const queryMode$ = interval(2000).pipe(
      take(1),
      tap(() => this.progressMode = 'determinate')
    );

    const determinateMode$ = interval(speed).pipe(
      takeWhile(value => value <= 100),
      map((value: number) => value * 10)
    );

    const result$ = queryMode$.pipe(concatWith(determinateMode$));
    return result$;
  }

  // Forma 2
  // public loadingProgress(speed: number) {
  //   const result$ = interval(speed).pipe(
  //     takeWhile(value => value <= 1000),
  //     delay(2000),
  //     tap(_ => this.progressMode = 'determinate'),
  //     map(value => value * 10)
  //   )

  //   return result$;
  // }

  public loadingProgressBuffer(speed: number)
  {
    const result$ = interval(speed).pipe(
      map(value => {
        this.loadingPercentBuffer.loadingBufferPercent = value * 15;
        this.loadingPercentBuffer.loadingPercent = value * 10;
        return this.loadingPercentBuffer;
      }),
      takeWhile(loadingProcess => loadingProcess.loadingPercent <= 100)
    )

    return result$;
  }

}
