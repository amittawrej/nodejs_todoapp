import express from "express"
import { allTask, deleteTask, newTask, updateTask } from "../controllers/task.js";
import { isAuth } from "../middlewares/auth.js";
const router=express.Router();

router.post("/newTask",isAuth,newTask);
router.get("/allTask",isAuth,allTask);

router.route("/:id").put(isAuth,updateTask).delete(isAuth,deleteTask);
export default router;