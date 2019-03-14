import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount, shallow } from "enzyme";
import CSSHeightBase from "./height";
import { CSSHeight } from "./";

/**
 * Configure Enzyme
 */
configure({ adapter: new Adapter() });

describe("CSSHeight", () => {
    /* tslint:disable-next-line */
    test("should not throw", () => {});
});
