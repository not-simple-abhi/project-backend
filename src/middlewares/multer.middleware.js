import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/public/temp')
  },
  filename: function (req, file, cb) {
    
    cb(null, file.originalname) // can be updated look the video 11 at 33:50 
  }
})

export const upload = multer({ storage})