import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { TextParserComponent } from './text-parser/text-parser.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    CommonModule, 
    PdfViewerModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: [TextParserComponent],
  exports: [TextParserComponent],
})
export class FrontendFeatureTextModule {}
