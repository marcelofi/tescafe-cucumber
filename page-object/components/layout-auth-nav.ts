import { Selector,t } from "testcafe";
import { areElementsDisplayed } from "../actions";


class LayoutAuthNav{
        elements={            
            bankingBtn:Selector('.button.transparent.sm.hide-sm'),
            loginBtn: Selector('.button.secondary.sm'),
            loginJoinBtn:Selector('.button.primary.sm'),
            blackjackIcon:Selector('a[href="/casino/table-games/multi-hand-blackjack"]'),
            aboutUsFooter:Selector('div[class="static-links"] a:nth-child(1)'),
            titlePage:Selector('title'),
        }      
        
    

    async headerDisplayed(){
        areElementsDisplayed([
            this.elements.bankingBtn,
            this.elements.blackjackIcon,
            this.elements.loginBtn,
            this.elements.loginJoinBtn            
        ])
    }

    async verfyHeaderScrollDownPage(){
        await t
        .scroll(this.elements.aboutUsFooter,'bottom');
        this.headerDisplayed();
    }
}

export const layoutAuthNav=new LayoutAuthNav()