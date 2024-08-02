import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

const ANGULAR_MATERIAL = [
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  RouterModule,
];

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ANGULAR_MATERIAL],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

}
