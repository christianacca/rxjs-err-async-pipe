import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemRoutingModule } from './problem-routing.module';
import { RxjsErrAsyncPipeComponent } from './rxjs-err-async-pipe.component';

@NgModule({
  imports: [
    CommonModule,
    ProblemRoutingModule
  ],
  declarations: [RxjsErrAsyncPipeComponent]
})
export class ProblemModule { }
