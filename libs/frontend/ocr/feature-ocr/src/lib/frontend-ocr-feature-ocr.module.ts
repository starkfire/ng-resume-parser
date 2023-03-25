import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcrparserComponent } from './ocrparser/ocrparser.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: [OcrparserComponent],
  exports: [OcrparserComponent],
})
export class FrontendOcrFeatureOcrModule {}
