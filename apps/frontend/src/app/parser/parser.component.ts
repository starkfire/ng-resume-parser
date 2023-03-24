import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { FrontendFeatureTextModule } from '@ng-resume-parser/frontend/feature-text';

@Component({
  selector: 'ng-resume-parser-parser',
  standalone: true,
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.scss'],
  imports: [
    MatTabsModule,
    FrontendFeatureTextModule
  ]
})

export class ParserComponent {}
