import { KingmakerPage } from './app.po';

describe('kingmaker App', function() {
  let page: KingmakerPage;

  beforeEach(() => {
    page = new KingmakerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
