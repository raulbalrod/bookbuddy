import express from "express";
import bookRouter from "./book-router.js";
import userRouter from "./user-router.js";

const router = express.Router();

router.use("/books", bookRouter);
router.use("/users", userRouter);

export default router;
