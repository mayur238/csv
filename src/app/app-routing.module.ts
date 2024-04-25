import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'csv',
    loadChildren: () => import('./csv/csv.module').then((m) => m.CsvModule),
  },
  { path: '', redirectTo: '/csv', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
