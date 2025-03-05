import User from "../model/userModel.js";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" })
        }
        const hashPassword = await bcrypt.hash(password, 10) //gensalt
        const newUser = new User({
            name: name, email: email, password: hashPassword
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            success: true,
            message: "User created successfully!",
            user: {  // Include user data in response
                _id: savedUser._id,
                name: savedUser.name,
                email: savedUser.email
            }
        });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid email or password!" });
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Invalid email or password!" });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Login successfull!", user: {
                    _id: user.id,
                    name: user.name,
                    email: user.email
                }
            })
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export { signup, login };