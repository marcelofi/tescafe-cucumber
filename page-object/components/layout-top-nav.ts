import { Selector,t } from "testcafe";

class LayoutTopNav{        
        sportsIcon:Selector=Selector('a[routerlink="/sportsbook"]');
        livebettingIcon:Selector=Selector('a[routerlink="/live-betting"]');
        casinoIcon:Selector=Selector('a[routerlink="/casino"]');
        raceBookIcon:Selector=Selector('a[routerlink="/horses"]');
        pokerIcon:Selector=Selector('a[routerlink="/poker"]');
        esportIcon:Selector=Selector('a[routerlink="/esports"]');
        contestIcon:Selector=Selector('a[routerlink="/contests"]');
        promosIcon:Selector=Selector('a[routerlink="/promotions"]');
        logobetonline:Selector=Selector('img[src="/assets/images/logo.svg"]');        
        aboutUsFooter:Selector=Selector('#btnAboutUs');
        activeIcon:Selector=Selector('.categories > .active');
    

    async headerBarDisplayed(){
        await t
        .expect(this.sportsIcon.exists).ok()
        .expect(this.livebettingIcon.exists).ok()
        .expect(this.casinoIcon.exists).ok()
        .expect(this.raceBookIcon.exists).ok()
        .expect(this.pokerIcon.exists).ok()
        .expect(this.esportIcon.exists).ok()
        .expect(this.contestIcon.exists).ok()
        .expect(this.promosIcon.exists).ok()
    }
    
}

export default new LayoutTopNav();