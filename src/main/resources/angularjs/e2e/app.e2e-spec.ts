import { AngularjsPage } from './app.po';

describe('angularjs App', function() {
  let page: AngularjsPage;

  beforeEach(() => {
    page = new AngularjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
