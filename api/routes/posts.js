import express from "express";
import {
  getPost,
  getPosts,
  createPost,
  commentPost,
  updatePost,
  deletePost,
} from "./../controllers/posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.post("/:id/commentPost", commentPost);
router.delete("/:id", deletePost);

export default router;
