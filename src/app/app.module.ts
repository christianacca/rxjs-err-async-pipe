import { ErrorHandler, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DelegatingErrorHandler } from './delegating-error-handler.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RxjsErrAsyncPipeComponent } from './rxjs-err-async-pipe/rxjs-err-async-pipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsErrAsyncPipeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [{ provide: ErrorHandler, useClass: DelegatingErrorHandler }],
  bootstrap: [AppComponent]
})
export class AppModule { }
