import React from "react";
import { useOutletContext } from "react-router-dom";

const ArticleLayout = () => {
  const { code } = useOutletContext();
  return (
    <div className="container h-auto mx-auto p-4">
      {code}
        </div>
  );
};

export default ArticleLayout;
