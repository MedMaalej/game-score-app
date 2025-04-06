import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-details-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './game-details-dialog.component.html',
  styleUrls: ['./game-details-dialog.component.scss']
})
export class GameDetailsDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
