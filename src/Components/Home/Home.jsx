import React from "react";
import Header from "./Header";
import SocialM from "./SocialM";
import Services from "./Services";
import Audiences from "./Audiences";
import Partner from "./Partner";
import VideoGallery from "./VideoGallery";
import Join from "./Join";

const Home = () => {
  return (
    <div>
      <Header />
      <SocialM />
      <Services />
      <Join />
      <Partner />
      <Audiences />

      <VideoGallery />
    </div>
  );
};

export default Home;
