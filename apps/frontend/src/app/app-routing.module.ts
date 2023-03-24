import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParserComponent } from './parser/parser.component';

const routes: Routes = [
    {
        path: 'parser',
        component: ParserComponent
    },
    {
        path: '',
        redirectTo: 'parser',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}