import React from "react";
import Introduction from "./components/Introduction";
import ArticleNavigation from "./components/ArticlesNavigation";
import Article1 from "./components/Articles/1";

const Page = () => {
  return (
    <div>
      <Introduction />
      <ArticleNavigation />
      <Article1 />
    </div>
  );
};

export default Page;
