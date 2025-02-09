import React from "react";
import Introduction from "./components/Introduction";
import ArticleNavigation from "./components/ArticlesNavigation";
import Article1 from "./components/Articles/1";
import Article2 from "./components/Articles/2";
import Article3 from "./components/Articles/3";

const Page = () => {
  return (
    <div>
      <Introduction />
      <ArticleNavigation />
      <Article1 />
      <Article2 />
      <Article3 />
    </div>
  );
};

export default Page;
