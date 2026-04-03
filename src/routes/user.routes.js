import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";


const router =Router();

router.route("/register").post( // here bfeofre registering user we are handling files
                                // so that we save files like cover images and avtar
                                //step 1 of register user
    upload.fields({
        name:"avtar",
        maxCount: 1
    },
    {
        name:"coverImage",
        maxCount:1
    }),
    registerUser)






export default router;