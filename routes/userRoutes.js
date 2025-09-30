import express from "express";

import { getUsers, createUser } from "../controllers/userController.js";
import { validateUser } from "../validators/userValidator.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/users", validateUser, createUser);

export default router;
