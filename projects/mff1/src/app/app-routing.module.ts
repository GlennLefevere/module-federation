import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'news',
  },
  {
    path: 'news',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mff2',
      exposedModule: './Module'
    }).then(m => m.NewsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
