import express from "express";
import checkApiKey from "../middlewares/api-key.js";
import validate from "../middlewares/validators/image.validator.js";
import { upload, fetch } from "../controller/image.controller.js";
import { uploadFile } from "../middlewares/multer.js";

const router = express.Router();

router.post("/", uploadFile.single("image"), upload);
router.get("/", fetch);

export default router;
