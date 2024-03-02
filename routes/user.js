import express from "express";
import { getMyProfile, login, logout, register } from "../controllers/user.js";
import { isAuth } from "../middlewares/auth.js";
const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/logout',logout)
// router.get
router.get('/me',isAuth,getMyProfile)



export default router;