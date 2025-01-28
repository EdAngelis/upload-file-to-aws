import { Router } from "express";
import userRoutes from "./user.route.js";
import imageRoutes from "./image.route.js";

const router = Router();

router.use("/users", userRoutes);
router.use("/images", imageRoutes);

export default router;
