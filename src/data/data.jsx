import React from "react";
import Dropdown from "../topics/dropdown/Demo";
import FLIDemo from "../topics/floating_label_input/Demo";

const data = [
  {
    name: "Dropdown",
    heading: "Custom Dropdown Button",
    subheading:
      "Create a dropdown button. The element is a simple button, which when clicked opens up a list of options to select. The list closes if (1) an option from list is selected; (2) area outside the dropdown is clicked. ",
    id: "dropdown",
    demoTab: <Dropdown />,
    codeTab: <></>,
    articleTab: <div>Content goes here</div>,
  },
  {
    name: "Floating Label for Input",
    heading: "Floating Label for Input",
    subheading:
      "The label for an input is animated, such that the label initially appears as a placeholder, but when clicked or focused on, floats to the top outline of the input element.",
    id: "floating_label",
    demoTab: <FLIDemo />,
    codeTab: <></>,
    articleTab: <></>,
  },
];

export default data;
