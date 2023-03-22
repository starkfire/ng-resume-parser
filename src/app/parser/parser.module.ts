import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextComponent } from './text/text.component';
import { OcrComponent } from './ocr/ocr.component';
import { ParserComponent } from './parser.component';

import { ParserRoutingModule } from './parser-routing.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TextComponent,
    OcrComponent,
    ParserComponent
  ],
  imports: [
    CommonModule,
    ParserRoutingModule,
    PdfViewerModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ParserModule { }