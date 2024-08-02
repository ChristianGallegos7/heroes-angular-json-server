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
  selector: 'app-login-page',
  standalone: true,
  imports: [ANGULAR_MATERIAL, RouterModule],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent { }
