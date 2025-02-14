const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendVerificationEmail = require("./mailVerification");
const User = require('../model/User')

const registerUser = async(req,res) => {
    try{

    const { firstName, lastName, email, password, confirmPassword } = req.body;
    const { role } = req.query;
     
    if (!firstName || !lastName || !email || !password || !confirmPassword || !role) {
        return res.status(400).json({message:"Please send all fields"})
    }

    if(password !== confirmPassword){
        return res.status(400).json({message:"Password and confirm password are same."})
    }

    if (!['customer', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role' });
    }

    const existEmail = await User.findOne({where:{email:email}});
    console.log(existEmail);
    
    if(existEmail){
      return  res.status(400).send({ message: 'email already exist.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
    sendVerificationEmail(email,token);
    return res.status(201).json({message:"Registration successful. Please verify your email."})

   }
   catch(error){
    console.log('error',error);
    res.status(500).json({ error: error?.message }); 
   }

}

const verifyEmail = async(req,res) => {
    try{
        const {token} = req.query;

        if(!token){
            return res.status(400).json({message:"Token is required"});
        }

        const { email } = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({ where: { email } });
    
        if (!user) {
          return res.status(400).json({ message: 'Invalid token' });
        }

        user.isVerified = true;
        await user.save();

        return res.status(200).json({message:"Email verified successfully!"})

    }
    catch(error){
        console.log('error',error);
        res.status(500).json({ message: error?.message });
    }
}

const login = async(req,res) => {
    try{
        const {email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({message:"Credential are required"})
        }
        
        const user = await User.findOne({ where: { email } });

        if (!user || user.role !== 'admin') {
            return res.status(403).json({ message: 'You are not allowed to login from here' });
          }
      
          const isMatch = await bcrypt.compare(password, user.password);

          if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }
            
         const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        
         return res.status(200).json({message:"Login successfully!",data:{firstName:user?.firstName, lastName:user?.lastName, email:user?.email,token:token}})
 
    }
    catch(error){
        console.log('error',error);
        res.status(500).json({ message: error?.message });
    }
}



module.exports = {registerUser,verifyEmail,login}