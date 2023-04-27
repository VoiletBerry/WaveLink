import React, { useState } from "react";
import axios from "axios";
import { URL } from "../Utils/constants";

const CreateWave = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: [],
    selectedFile: "",
  });

  const HandleSumit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("creator", postData.creator);
    formData.append("title", postData.title);
    formData.append("message", postData.message);
    formData.append("tags", postData.tags);
    formData.append("selectedFile", postData.selectedFile);

    try {
      await axios.post(URL, formData);
      console.log(postData);
      setPostData({
        creator: "",
        title: "",
        message: "",
        tags: [],
        selectedFile: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        className=" dark:bg-gray-900 p-5 col-span-2 m-5 rounded-lg"
        onSubmit={HandleSumit}
        method="post"
        encType="multipart/form-data"
      >
        <div className="text-start text-xl text-gray-400 mb-5 ml-2">
          Share Your Memory
        </div>
        <div className="mb-6">
          <input
            type="text"
            value={postData.creator}
            onChange={(e) => {
              setPostData({ ...postData, creator: e.target.value });
            }}
            id="creator"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Creator"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
            id="title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Title"
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
            rows={5}
            type="text"
            id="message"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Message"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            id="tags"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Tags"
          />
        </div>

        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
          onChange={(e) =>
            setPostData({ ...postData, selectedFile: e.target.files[0] })
          }
          required
        />

        <div className="flex items-start my-6"></div>

        <button
          type="submit"
          className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default CreateWave;
