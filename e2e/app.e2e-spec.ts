import { UdemyTestingRealPage } from './app.po';

describe('udemy-testing-real App', () => {
  let page: UdemyTestingRealPage;

  beforeEach(() => {
    page = new UdemyTestingRealPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
