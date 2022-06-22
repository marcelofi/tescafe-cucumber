import { layoutAuthNav } from '../../Page-object/components/layout-auth-nav';
import layoutTopNave from '../../Page-object/components/layout-top-nav';
import { homepage } from '../../Page-object/home/bodypage';

fixture`Load the new sports betting`.page('https://sb.ppd.pposervices.local/');

test('Verify the title of the page', async (t) => {
  await t
    .expect(layoutAuthNav.elements.titlePage.innerText)
    .contains('Sportsbetting');
});

test('Verify that the header is displayed', async (t) => {
  await layoutAuthNav.headerDisplayed();
});

test('Verify the main menu icons', async (t) => {
  await layoutTopNave.headerBarDisplayed();
});

test('Verify that login button redirects to the login page', async (t) => {
  await t
    .click(layoutAuthNav.elements.loginBtn)
    .expect(layoutAuthNav.elements.titlePage.innerText)
    .contains('Sign in to Sportsbetting');
});

test('Verify the main image is displayed', async (t) => {
  await t.expect(homepage.elements.mainBodyImage.exists).ok();
});
