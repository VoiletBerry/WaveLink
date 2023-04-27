import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "./../Utils/constants";
import Wave from "./Wave";
import { useDispatch, useSelector } from "react-redux";
import { addWave } from "../ReduxStore/WavesSlice";

const WavesContainer = () => {
  const WavesData = useSelector((store) => store.Waves);

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(URL).then((res) => {
      const waves = res.data;
      dispatch(addWave(waves));
    });
  }, []);

  return !WavesData.length ? null : (
    <div className="col-span-7">
      <div className="">
        <WavesArea info={WavesData[0]} />
      </div>
    </div>
  );
};

const WavesArea = ({ info }) => {
  return (
    <div className="flex flex-wrap m-5">
      {info.map((item) => {
        return <Wave key={item._id} data={item} />;
      })}
    </div>
  );
};

export default WavesContainer;
