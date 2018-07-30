
Feature: User is able to use the login functionality
@test @regression
  Scenario: User is able to login successfully with valid credentials
  Given The user on the homepage
    When User enters username
    And User enters password
    And user clicks on login button
    Then The user should be able to login

  @test
  Scenario Outline: User is unable to login with invalid credentials

  Given The user on the homepage
  When User enters invalid username as "<username>"
  And User enters invalid password as "<password>"
  And user clicks on login button
  Then The user should be able to the error message "<error_message>"
    Examples:
    | username|password       |error_message|
    |Admin    |123          |Invalid credentials|
    |Admin    |             |Password cannot be empty|
    |Abc      |             |Password cannot be empty|
    |         |admin123     |Username cannot be empty|
    |         |123          |Username cannot be empty|
    |         |             |Username cannot be empty|
    |Abc      |123          |Invalid credentials|
    |Abc      |admin123     |Invalid credentials|
