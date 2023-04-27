import React from "react";
import { getTimePassedSince } from "../Utils/helper";

const Wave = ({ data }) => {
  const {
    creator,
    title,
    message,
    tags,
    selectedFile,
    likeCount,
    createdAt,
    _id,
  } = data;

  return (
    <div className="mx-3 w-96  my-3">
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-white shadow-xl">
        <a href="# ">
          <img
            className="rounded-t-lg z-1"
            src={`http://localhost:5000/${data.selectedFile}`}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
              {title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {message}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            #{tags}
          </p>
          <div className="flex flex-row justify-between">
            <i className=" fa fa-thumbs-up mt-1"></i>
            <p>{getTimePassedSince(createdAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wave;
