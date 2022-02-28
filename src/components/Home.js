import React from "react";
import Header from "./header";
import Body from "./Body";
import Information from "./information";
import Footer from "./footer";
const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <div className="border-orange w-250"></div>
      <Information />
      <Footer />
    </div>
  );
};

export default Home;
