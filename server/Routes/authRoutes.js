import express from "express";
const router = express.Router();
import { registerController,loginController, logoutController} from '../Controllers/authController.js';


//Register
router.post('/register',registerController)

router.post('/login',loginController)

router.get("/logout", logoutController);

export default router