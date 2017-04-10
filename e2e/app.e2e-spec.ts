import { GarbageAppPage } from './app.po';

describe('garbage-app App', () => {
  let page: GarbageAppPage;

  beforeEach(() => {
    page = new GarbageAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
