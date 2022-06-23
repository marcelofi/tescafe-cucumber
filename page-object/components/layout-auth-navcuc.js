import { areElementsDisplayed } from "../actions";
const {Selector}=require('testcafe');

function select(selector){
    return Selector(selector).with({boundTestRun:testController})
}

exports.LayoutAuthNav={
    bankingBtn:function(){
        return select ('.button.transparent.sm.hide-sm')
    },

    loginBtn:function(){
        return select('.button.secondary.sm')
    },

    loginJoinBtn:function(){
        return select('.button.primary.sm')
    },

    blackjackIcon:function(){
        return select('a[href="/casino/table-games/multi-hand-blackjack"]')
    },

    aboutUsFooter:function(){
        return select('div[class="static-links"] a:nth-child(1)')
    },

    titlePage:function(){
        return select('title')
    },

    headerDisplayed:function(){
        areElementsDisplayed([
            this.elements.bankingBtn,
            this.elements.blackjackIcon,
            this.elements.loginBtn,
            this.elements.loginJoinBtn            
        ])
    }
}

    
        
    

    