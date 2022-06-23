const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const layoutnav=require('../../page-object/components/layout-auth-navcuc')

const URL=`https://sb.qa.pposervices.local`;

Given('I enter to the new Sport Betting site', async function () {    
    await testController.navigateTo(URL);
  });

  When('I see the sports betting image', async function () {    
    await testController.expect(layoutnav.LayoutAuthNav.bankingBtn().exists),ok;
  });

  When('I see the blackJack button', async function () {    
    await testController.expect(layoutnav.LayoutAuthNav.blackjackIcon().exists),ok;
  });

  When('I see the banking button', async function () {    
    await testController.expect(layoutnav.LayoutAuthNav.bankingBtn().exists),ok;
  });

  When('I see the Login button', async function () {    
    await testController.expect(layoutnav.LayoutAuthNav.loginBtn().exists),ok;
  });

  When('I see the Join Now button', async function () {    
    await testController.expect(layoutnav.LayoutAuthNav.loginJoinBtn().exists),ok;
  });

Then('the header components are displayed and aligened', async function () {
    await testController.expect(layoutnav.LayoutAuthNav.loginBtn().exists),ok;    
  });