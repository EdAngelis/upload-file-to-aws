import express from "express";
import checkApiKey from "../middlewares/api-key.js";
import validate from "../middlewares/validators/image.validator.js";
import {
  upload,
  fetch,
  update,
  deleteImage,
} from "../controller/user.controller.js";

const router = express.Router();

router.post("/", validate, upload);
router.get("/:id", fetch);
router.put("/:id", validate, update);
router.delete("/:id", deleteImage);

export default router;
