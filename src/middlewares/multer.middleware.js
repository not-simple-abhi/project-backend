import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), "public", "temp"))
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname) // can be updated look the video 11 at 33:50 
  }
})

export const upload = multer({ storage})