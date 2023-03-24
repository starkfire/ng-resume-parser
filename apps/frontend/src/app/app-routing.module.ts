import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'parser',
        loadChildren: () => import('./parser/parser.module').then(m => m.ParserModule)
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