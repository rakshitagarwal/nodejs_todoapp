import express from "express";
import {   getMyProflie, login, logout, register } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

router.route("/me").get(isAuthenticated,getMyProflie)
export default router;
