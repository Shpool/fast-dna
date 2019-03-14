import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount, shallow } from "enzyme";
import CSSWidthBase from "./width";
import { CSSWidth } from "./";

/**
 * Configure Enzyme
 */
configure({ adapter: new Adapter() });

describe("CSSWidth", () => {
    /* tslint:disable-next-line */
    test("should not throw", () => {});
});
