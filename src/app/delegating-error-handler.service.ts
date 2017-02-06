import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class DelegatingErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }
  handleError(error: any) {
    alert(`DelegatingErrorHandler received error: ${error}`);
    super.handleError(error)
  }
}
