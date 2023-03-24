import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ParserComponent } from "./parser.component";
import { TextparserComponent } from "../textparser/textparser.component";
import { OcrComponent } from "../ocr/ocr.component";

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ParserRoutingModule } from "./parser-routing.module";

import { PdfViewerModule } from "ng2-pdf-viewer";

@NgModule({
    declarations: [
        ParserComponent,
        TextparserComponent,
        OcrComponent
    ],
    imports: [
        CommonModule,
        ParserRoutingModule,
        MatTabsModule,
        MatButtonModule,
        MatIconModule,
        MatSnackBarModule,
        PdfViewerModule
    ]
})

export class ParserModule {}