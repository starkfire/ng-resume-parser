import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrparserComponent } from './ocrparser/ocrparser.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [OcrparserComponent],
  exports: [OcrparserComponent],
})
export class FrontendOcrFeatureOcrModule {}
