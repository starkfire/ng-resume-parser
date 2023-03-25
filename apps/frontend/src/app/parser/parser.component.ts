import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { FrontendTextFeatureTextModule } from '@ng-resume-parser/frontend/text/feature-text';
import { FrontendOcrFeatureOcrModule } from '@ng-resume-parser/frontend/ocr/feature-ocr';

@Component({
  selector: 'ng-resume-parser-parser',
  standalone: true,
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss'],
  imports: [
    MatTabsModule,
    FrontendTextFeatureTextModule,
    FrontendOcrFeatureOcrModule
  ]
})

export class ParserComponent {}
