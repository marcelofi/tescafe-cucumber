import { Selector, t } from 'testcafe';

class LayoutTopNav {
  elements = {
    sportsIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)`
    ),
    livebettingIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1)`
    ),
    casinoIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1)`
    ),
    raceBookIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)`
    ),
    pokerIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(8) > a:nth-child(1)`
    ),
    esportIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(9) > a:nth-child(1)`
    ),
    contestIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(10) > a:nth-child(1)`
    ),
    promosIcon: Selector(
      `body > app-root:nth-child(1) > app-header:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(11) > a:nth-child(1)`
    ),
    logobetonline: Selector(`.brand`),
    aboutUsFooter: Selector('#btnAboutUs'),
    activeIcon: Selector('.categories > .active'),
  };

  async headerBarDisplayed() {
    await t
      .expect(this.elements.sportsIcon.exists)
      .ok()
      .expect(this.elements.livebettingIcon.exists)
      .ok()
      .expect(this.elements.casinoIcon.exists)
      .ok()
      .expect(this.elements.raceBookIcon.exists)
      .ok()
      .expect(this.elements.pokerIcon.exists)
      .ok()
      .expect(this.elements.esportIcon.exists)
      .ok()
      .expect(this.elements.contestIcon.exists)
      .ok()
      .expect(this.elements.promosIcon.exists)
      .ok();
  }
}

export default new LayoutTopNav();
