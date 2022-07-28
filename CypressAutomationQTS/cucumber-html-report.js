const report = require('multiple-cucumber-html-reporter');
report.generate({
    theme: 'bootstrap',
    jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "reports/finalReport",
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    metadata: {
        browser: {
            name: "Chrome",
            version: "92.0.4515.159",
        },
        device: "Local test machine",
        platform: {
            name: "Mac OS",
            version: "",
        },
    },
});