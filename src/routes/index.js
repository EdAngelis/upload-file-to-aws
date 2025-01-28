import { Router } from "express";
import questionsRoute from "./questions.route.js";
import examRoutes from "./exam.route.js";
import userRoutes from "./user.route.js";

const router = Router();

router.use("/questions", questionsRoute);
router.use("/exams", examRoutes);
router.use("/users", userRoutes);

export default router;
