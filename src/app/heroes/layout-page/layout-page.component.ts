import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

const ANGULAR_MATERIAL = [
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule
];

@Component({
  selector: 'app-layout-page',
  standalone: true,
  imports: [RouterModule, ...ANGULAR_MATERIAL],
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  public sidebarItems = [
    {
      label: 'Listado', icon: 'label', url: './list'
    },
    {
      label: 'Añadir', icon: 'add', url: './new-hero'
    },
    {
      label: 'Buscar', icon: 'search', url: './search'
    },
  ]
}
