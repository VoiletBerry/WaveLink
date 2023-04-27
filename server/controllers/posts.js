import postMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postMessage.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPosts = async (req, res) => {
  if (!req.body || !req.file) {
    return res.status(400).json({ message: "Bad request" });
  }

  const newPost = new postMessage({
    creator: req.body.creator,
    title: req.body.title,
    message: req.body.message,
    tags: req.body.tags,
    selectedFile: req.file.path,
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
