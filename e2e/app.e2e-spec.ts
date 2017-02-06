import { RxjsErrAsyncPipePage } from './app.po';

describe('rxjs-err-async-pipe App', function() {
  let page: RxjsErrAsyncPipePage;

  beforeEach(() => {
    page = new RxjsErrAsyncPipePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
