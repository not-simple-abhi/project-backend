const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((err)=>next(err))//next controls the flow of execution , here it tell go to the error handling mechanism next
    }
}




export { asyncHandler}

/*cnst asyncHandler=(fn)=> async(req,res,next)=>{
    try{
        await fn(req,res,next)
    }
    catch(error){
        res.status(err.code||500).json({
            success:false,
            message:err.message

        })

    }

} */