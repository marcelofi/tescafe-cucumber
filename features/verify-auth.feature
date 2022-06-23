Feature: Verify the header of Nes Sport Betting site

    As a visitor I can see the header of the page

Scenario: Verify the authentication buttons
Given I enter to the new Sport Betting site
When I see the sports betting image
And I see the blackJack button
And I see the banking button
And I see the Login button
And I see the Join Now button

Then the header components are displayed and aligened
