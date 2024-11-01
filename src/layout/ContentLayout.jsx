import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data";
import DemoLayout from "./DemoLayout";
import CollectionLayout from "./CollectionLayout";

const MainContent = () => {
  const currentPage = useParams().page;
  const metadata = data.filter((iter) => iter.id == currentPage)[0];

  useEffect(() => {
    document.title = metadata?.name + " - React Library";
  }, [metadata]);

  return metadata?.collection ? (
    <CollectionLayout data={metadata} />
  ) : (
    <DemoLayout>{metadata?.demoTab}</DemoLayout>
  );
};

export default MainContent;
