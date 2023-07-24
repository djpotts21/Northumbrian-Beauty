/**
 * @jest-environment jsdom
 */

const [lovelyPlacesNorthumberlandFunc, reset] = require('./script');

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects show list to be hidden when no content is listed", () => {
        reset();
        expect(document.getElementById("show-as-list-toggle")
            .innerText).toEqual("");
    });
    test("Expects show list to be show when  content is listed", () => {
        lovelyPlacesNorthumberlandFunc();
        expect(document.getElementById("show-as-list-toggle")
            .innerText).toEqual("Show as a List");
    });
});

