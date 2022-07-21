const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "./cypress/cucumber-json",  // ** Path of .json file **//
    reportPath: "./mochawesome-report",
    reportSuiteAsScenarios: true,
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