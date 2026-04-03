import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/users.models.js";
import { uploadCloudinary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
    const { fullname, email, password, username } = req.body
    console.log("email: ", email)
    console.log("pass: ", password)

    /*if(fullname===""){
        throw new ApiError(400, "enter full name")
    }
    if(email===""){
        throw new ApiError(400, "enter valid fullname")
    }*/ // we can do this also ..

    if ( //step 2:check validation
        [fullname, password, email, username].some((field) =>
            field?.trim() === "")
    ) {
        throw new ApiError(400, "invalid credentails")
    }

    const existeduser = User.findOne({ //step3 check user already exists or not
        $or: [{ username }, { email }]

    })
    if (existeduser) {
        throw new ApiError(409, "user already exists ")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverIamge[0]?.path;
    if(!avatarLocalPath){
        throw new ApiError(400, "avatar is required")
    }
    const avatar=await uploadCloudinary(avatarLocalPath);
    const coverIamge =await uploadCloudinary(coverImageLocalPath);
    if(!avatar){
        throw new ApiError(400,"avatar is required");
    }

    const user=User.create({
        fullname,
        avatar:avatar.url,
        coverImage:coverIamge?.url||"",
        email,
        password,
        username

    })

    const createdUser= await User.findById(user._id).select(
        "-password -refreshTokens"
    )
    if(!createdUser){
        throw new ApiError(500 ," something went wrong while registering the user");
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser , "user registered successfully")
    )



})


export { registerUser }
