import { UpgradeprojPage } from './app.po';

describe('upgradeproj App', () => {
  let page: UpgradeprojPage;

  beforeEach(() => {
    page = new UpgradeprojPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
