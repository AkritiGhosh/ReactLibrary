import React from "react";
import { constantType } from "../lib/constants";

const Content = ({ data = [] }) => {
  return data?.map((section) => {
    switch (section?.type) {
      case constantType?.HEADING:
        return <></>;
      case constantType?.PARAGRAPH:
        return <></>;
      case constantType?.IMAGE:
        return <></>;
      case constantType?.CODEBOX:
        return <></>;
      case constantType?.FORM:
        return <></>;
      case constantType?.LINK:
        return <></>;
      case constantType?.BUTTON:
        return <></>;
      default:
        return <></>;
    }
  });
};

export default Content;
