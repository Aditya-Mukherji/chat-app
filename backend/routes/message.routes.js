import express from "express"
import Constants from "../controllers/message.controller.js"
import protectRoute from "../middleware/protectRoute.middleware.js"
const router =express.Router();

router.get(":/id",protectRoute,Constants.getMessages)
router.post("/send/:id",protectRoute,Constants.sendMessage)
export default router