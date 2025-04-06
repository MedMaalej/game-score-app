import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { GameDetailsDialogComponent } from '../game-details-dialog/game-details-dialog.component';

@Component({
  selector: 'app-game-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent {
  @Input() team1Name: string = '';
  @Input() team2Name: string = '';
  @Input() team1Logo: string = '';
  @Input() team2Logo: string = '';
  @Input() score1: number = 0;
  @Input() score2: number = 0;

  constructor(private dialog: MatDialog) {}

  openDetails() {
    this.dialog.open(GameDetailsDialogComponent, {
      data: {
        team1Name: this.team1Name,
        team2Name: this.team2Name,
        score1: this.score1,
        score2: this.score2,
        possession: '50% - 50%',
        fouls: '10 - 12',
        shots: '15 - 20'
      }
    });
  }
}
