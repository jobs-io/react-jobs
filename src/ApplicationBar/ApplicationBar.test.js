import React from "react";
import { shallow } from "enzyme";
import ApplicationBar from "./ApplicationBar";

describe("ApplicationBar", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ApplicationBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
