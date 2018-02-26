import React from "react";
import { shallow } from "enzyme";
import App from "../../client/components/App.jsx";

test("should render Feedback correctly", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
