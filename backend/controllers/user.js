import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const signin = async(req, res) => {
    const { email, password } = req.body

    try {

        const existingUser = await User.findOne({ email })
        if (!existingUser) return res.status(404).json({ message: "User Dosen't exist's" })

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Password" })

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, process.env.SECRET, { expiresIn: "1h" });

        res.status(200).json({result: existingUser, token})
        
    } catch (error) {
        res.status(500).json({message:"Somthing Went Wrong"})
    }
    
}

export const signup = async(req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body
    
    try {
        
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(400).json({ message: "User Already exist's" })
        if (password !== confirmPassword) return res.status(400).json({ message: 'Password Didnt match' })
        
        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` })
        
        const token = jwt.sign({ email: result.email, id: result._id }, process.env.SECRET, { expiresIn: "1h" });

        res.status(200).json({result, token})

    } catch (error) {
        res.status(500).json({message:"Somthing Went Wrong"})
    }
}