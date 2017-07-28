import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MergeComponent } from './modules/merge/merge.component';

const routes: Routes = [
    { path: 'merge', component: MergeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutesModule {}
