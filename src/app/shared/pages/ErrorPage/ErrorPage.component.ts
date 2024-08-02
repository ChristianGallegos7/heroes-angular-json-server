import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>ErrorPage works!</p>`,
  styleUrl: './ErrorPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPageComponent { }
