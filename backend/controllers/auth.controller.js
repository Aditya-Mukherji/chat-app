import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signup =async (req,res)=>{
    
    try{
        const {fullName,username,password,confirmPassword,gender} =req.body;
        if(password !== confirmPassword){
            return res.status(400).json({
                error: "Passwords don't match"
            })
        }
        const user =await User.findOne({username});
        
        if(user){
            return res.status(400).json({
                error:"Username already exists"
            })
        }
        //HASH PASSWORD LOGIC
        const salt= await bcrypt.genSalt(10)
        const hashedPassword= await bcrypt.hash(password,salt)
        //avatar placeholder logic using liara API

        const boyProfilePic= 'https://avatar.iran.liara.run/public/boy?username=${username}'
        const girlProfilePic= 'https://avatar.iran.liara.run/public/girl?username=${username}'

        const newUser=new User({
            fullName:fullName,
            username:username,
            password:hashedPassword,
            gender:gender,
            profilePic: gender==="male" ? boyProfilePic:girlProfilePic
        });

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
            _id: newUser._id,
            fullName:newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic
            });
            
        }
        else{
            res.status(400).json(
                {error:"Invalid User Data"}
            )
        }
        
    }
    catch (error){
        console.log("Erorr in signup controller", error.message)
        res.status(500).json({
            error:"Internal Server Error"
        })
    }
   
}
export const login= async (req,res)=>{
    res.send("hello")
}
export const logout =async (req,res)=>{
    res.send("hello from logout")
}