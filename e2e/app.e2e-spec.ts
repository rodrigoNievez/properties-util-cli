import { PropertiesUtilCliPage } from './app.po';

describe('properties-util-cli App', () => {
  let page: PropertiesUtilCliPage;

  beforeEach(() => {
    page = new PropertiesUtilCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
