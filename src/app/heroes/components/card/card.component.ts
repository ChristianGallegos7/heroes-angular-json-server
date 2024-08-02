import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatChipListbox } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'heroes-heroe-card',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatCardModule, MatChipsModule, MatChipListbox, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() heroe!: Heroe;

  ngOnInit(): void {
    if (!this.heroe) throw new Error('Heroe is required');
  }

}
