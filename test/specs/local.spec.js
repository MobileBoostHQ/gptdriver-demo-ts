import GptDriver from "gpt-driver-node";

describe("Test spec example", () => {
    let gptDriver;

    beforeEach(async function () {
        const baseUrl = `${browser.options.protocol}://${browser.options.hostname}:${browser.options.port}${browser.options.path}`;
        gptDriver = new GptDriver({
            apiKey: browser.options.gptDriverApiKey,
            driver: browser,
            serverConfig: {
                url: baseUrl
            },
            cachingMode: "FULL_SCREEN", // options: "INTERACTION_REGION", "FULL_SCREEN", "NONE"
            testId: (this.currentTest?.parent?.title || 'unknown-suite') + ' - ' + (this.currentTest?.title || 'unknown-test')
        });
    })

    it("open the youtube app", async () => {
        await gptDriver.aiExecute("open the youtube app");
        await gptDriver.setSessionSucceeded();
    });
});