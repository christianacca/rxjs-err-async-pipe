import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RxjsErrAsyncPipeComponent } from './rxjs-err-async-pipe.component';

const routes: Routes = [
  { path: '', component: RxjsErrAsyncPipeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemRoutingModule { }
