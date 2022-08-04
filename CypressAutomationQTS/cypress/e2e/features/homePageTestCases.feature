Feature: Home Page Test Cases Feature File

    This file include all test cases related home Page
    Scenario: Verify that login button is visible
    Given User is on home page
    Then verify that login button is visible

    Scenario: Verify that top tags were visible on screen
    Given User is on home page
    Then verify that top ten tags were display on screen

    Scenario: Verify that next button is visible on screen
    Given User is on home page
    Then verify that next button is display on screen

    Scenario: verify that next button is working fine
    Given User is on home page
    Then click on next button 
    And verify that move to next page successfully

    Scenario Outline: Verify that tag Link is in working condition
    Given User is on home page
    Then user click on given tag "<tagName>"
    And verify that tag "<tagName>" link is open successfully

    Examples:
        | tagName | 
        | love    | 


    
