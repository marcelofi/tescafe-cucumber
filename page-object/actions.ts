import { t } from 'testcafe';

export async function areElementsDisplayed(elements: Selector[]) {
  elements.forEach(async (element) => {
    await t.expect(element.visible).ok();
  });
}
