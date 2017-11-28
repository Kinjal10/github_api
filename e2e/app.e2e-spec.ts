import { FptechProjectPage } from './app.po';

describe('fptech-project App', () => {
  let page: FptechProjectPage;

  beforeEach(() => {
    page = new FptechProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
