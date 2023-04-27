import React from "react";
import WavesContainer from "./WavesContainer";
import CreateWave from "./CreateWave";

const Body = () => {
  return (
    <div className="grid grid-flow-col mx-10">
      <WavesContainer />
      <CreateWave />
    </div>
  );
};

export default Body;
