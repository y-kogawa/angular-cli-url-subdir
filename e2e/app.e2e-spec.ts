import { UrlSubdirPage } from './app.po';

describe('url-subdir App', () => {
  let page: UrlSubdirPage;

  beforeEach(() => {
    page = new UrlSubdirPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
