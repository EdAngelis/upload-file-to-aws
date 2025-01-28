import express from "express";
import checkApiKey from "../middlewares/api-key.js";
import validateUser from "../middlewares/validators/user.validator.js";
import {
  createUserController,
  fetchUserController,
  updateUserController,
  deleteUserController,
  addStudentController,
  removeStudentController,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/", checkApiKey, validateUser, createUserController);
router.get("/:id", checkApiKey, fetchUserController);
router.put("/:id", checkApiKey, validateUser, updateUserController);
router.delete("/:id", checkApiKey, deleteUserController);
router.get("/students/:email/:studentEmail", checkApiKey, addStudentController);
router.delete(
  "/students/:email/:studentEmail",
  checkApiKey,
  removeStudentController
);

export default router;
