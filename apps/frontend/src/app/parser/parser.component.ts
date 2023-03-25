import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';
import { FrontendTextFeatureTextModule } from '@ng-resume-parser/frontend/text/feature-text';

@Component({
  selector: 'ng-resume-parser-parser',
  standalone: true,
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss'],
  imports: [
    MatTabsModule,
    FrontendTextFeatureTextModule
  ]
})

export class ParserComponent {}
