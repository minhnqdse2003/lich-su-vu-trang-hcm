import React from "react";
import "@fontsource-variable/lexend-giga";
import Introduction from "./components/Introduction";
import Body from "./components/Body";
import ArticleNavigation from "./components/ArticlesNavigation";
import Article1 from "./components/Articles/1";
import Article2 from "./components/Articles/2";
import Article3 from "./components/Articles/3";
import Article4 from "./components/Articles/4";

const Page = () => {
  return (
    <div>
      <Introduction />
      <Body/>
      <ArticleNavigation />
      <Article1 />
      <Article2 />
      <Article3 />
      <Article4 />
    </div>
  );
};

export default Page;
