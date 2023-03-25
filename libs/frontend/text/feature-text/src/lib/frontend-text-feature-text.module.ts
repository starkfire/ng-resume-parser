import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextparserComponent } from './textparser/textparser.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'

@NgModule({
  imports: [
    CommonModule, 
    PdfViewerModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [TextparserComponent],
  exports: [TextparserComponent],
})
export class FrontendTextFeatureTextModule {}
