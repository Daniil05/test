import { TestD2Page } from './app.po';

describe('test-d2 App', () => {
  let page: TestD2Page;

  beforeEach(() => {
    page = new TestD2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
