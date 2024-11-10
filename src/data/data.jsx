import GradientBorder1 from "../topics/buttons/colorful_border/GradientBorder1";
import GradientBorder2 from "../topics/buttons/colorful_border/GradientBorder2";
import GradientBorder3 from "../topics/buttons/colorful_border/GradientBorder3";
import Dropdown from "../topics/dropdown/BasicDropdown";
import FLIDemo from "../topics/form_elements/FloatingLabelInputField";
import ImageToggleSwitch from "../topics/form_elements/imgToggle/Demo";
import AnimatedTabs from "../topics/tabs/AnimatedTabs";
import TextWithImageBg from "../topics/textBgImage/Demo";
import TextWithImageBgAnimated from "../topics/textBgImage/WithBgImg";

const data = [
  {
    name: "Dropdown",
    heading: "Custom Dropdown Button",
    subheading:
      "Create a dropdown button. The element is a simple button, which when clicked opens up a list of options to select. The list closes if (1) an option from list is selected; (2) area outside the dropdown is clicked. ",
    id: "dropdown",
    collection: false,
    demoTab: <Dropdown />,
  },
  {
    name: "Floating Label for Input",
    heading: "Floating Label for Input",
    subheading:
      "The label for an input is animated, such that the label initially appears as a placeholder, but when clicked or focused on, floats to the top outline of the input element.",
    id: "floating_label_input",
    collection: false,
    demoTab: <FLIDemo />,
  },
  {
    name: "Colorful gradient border - 1",
    heading: "Colorful gradient border",
    subheading:
      "Applying gradient shaded borders - Method 1 : Using a parent div surrounding the button",
    id: "gradient_border_1",
    collection: false,
    demoTab: <GradientBorder1 />,
  },
  {
    name: "Colorful gradient border - 2",
    heading: "Colorful gradient border",
    // subheading:
    //   "Applying gradient shaded borders - Method 2 : Using a parent div surrounding the button",
    id: "gradient_border_2",
    collection: false,
    demoTab: <GradientBorder2 />,
  },
  {
    name: "Colorful gradient border - 3",
    heading: "Colorful gradient border",
    // subheading:
    //   "Applying gradient shaded borders - Method 3 : Using a parent div surrounding the button",
    id: "gradient_border_3",
    collection: false,
    demoTab: <GradientBorder3 />,
  },
  {
    name: "Text fill as image",
    heading: "Text having image for color",
    // subheading:
    //   "Applying gradient shaded borders - Method 3 : Using a parent div surrounding the button",
    id: "text_image_color",
    collection: false,
    demoTab: <TextWithImageBg />,
  },

  {
    name: "Text fill as image",
    heading: "Text having image for color",
    // subheading:
    //   "Applying gradient shaded borders - Method 3 : Using a parent div surrounding the button",
    id: "text_image_color_bg",
    collection: false,
    demoTab: <TextWithImageBgAnimated />,
  },
  {
    name: "Toggle with Images",
    heading: "Text having image for color",
    // subheading:
    //   "Applying gradient shaded borders - Method 3 : Using a parent div surrounding the button",
    id: "toggle_bg",
    collection: false,
    demoTab: <ImageToggleSwitch />,
  },
  
  {
    name: "Toggle with Images",
    heading: "Text having image for color",
    // subheading:
    //   "Applying gradient shaded borders - Method 3 : Using a parent div surrounding the button",
    id: "tabs",
    collection: false,
    demoTab: <AnimatedTabs />,
  },
  // {
  //   name: "Borders and gradients",
  //   heading: "CSS effects using borders and gradients",
  //   subheading:
  //     "A collection of different styling options for UI elements around borders and gradients",
  //   id: "button_collection",
  //   collection: true,
  //   data: [
  //     {
  //       name: "Colorful gradient border - 1",
  //       heading: "Colorful gradient border",
  //       subheading:
  //         "Applying gradient shaded borders - Method 1 : Using a parent div surrounding the button",
  //       id: "gradient_border_1",
  //       collection: false,
  //       demoTab: <GradientBorder1 />,
  //     },
  //   ],
  // },
];

export default data;
