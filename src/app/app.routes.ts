import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MergeComponent } from './modules/merge/merge.component';

const routes: Routes = [
    { path: 'home', component: AppComponent },
    { path: 'merge', component: MergeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutesModule {}
