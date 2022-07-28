Feature: Login Page Test Cases

    This file inculde all login related test cases avaialbe
    Scenario Outline: Scenario Outline name: Verify user is successffully login
    Given User is on home page
    When user click on login button
    Then user enter username "<username>" and password "<password>"
    And click on login Button
    Then verify that user is successfully logion
    
    Examples:
    |username|password|
    |rao|test |



    