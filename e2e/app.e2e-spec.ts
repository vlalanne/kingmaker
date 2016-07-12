import { PathfinderPage } from './app.po';

describe('pathfinder App', function() {
  let page: PathfinderPage;

  beforeEach(() => {
    page = new PathfinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
