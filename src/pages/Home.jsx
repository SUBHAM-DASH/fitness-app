import React, { useEffect, useState } from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercises";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import Excercises from "../components/Excercises";

const Home = () => {
  const [bodyParts, setBodyParts] = useState([]);

  return (
    <div>
      <HeroBanner />
      <SearchExcercises
        bodyParts={bodyParts}
        setBodyParts={setBodyParts}
      />
      <HorizontalScrollbar bodyParts={bodyParts} />
      <Excercises />
    </div>
  );
};

export default Home;
