Feature: Saucedemo Login with standard user

  Scenario: Success login Standard user
    Given A user visit login page
    When A user enter username "standard_user"
    And A user enter password "secret_sauce"
    And A user clicks on login button
    Then A user will be logged in

  Scenario: Failed login Locked out user
    Given A user visit login page
    When A user enter username "locked_out_user"
    And A user enter password "secret_sauce"
    And A user clicks on login button
    Then A user will receive "Epic sadface: Sorry, this user has been locked out." message

  Scenario: Incorrect user
    Given A user visit login page
    When A user enter incorrect credentials
    |username   |password  |
    |user1      |wrong_password|
    And A user clicks on login button
    Then A user will receive "Epic sadface: Username and password do not match any user in this service" message