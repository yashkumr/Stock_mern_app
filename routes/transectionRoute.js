import express from "express"
import { addTransection, getAllTransection, editTransection, deleteTransection } from "../controllers/transectionCtrl.js";
//router object
const router = express.Router();

//routers
// add transection
router.post("/add-transection", addTransection);
//getTransection
router.post("/get-transection", getAllTransection);

//Edit transection POST MEthod
router.post("/edit-transection", editTransection);
//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);



export default router
