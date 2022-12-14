import { User } from "../Dao/index.js";
import validator from "validator";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcrypt";

export async function signup(req, res) {
  try {
    let { email, role, password } = req.body;

    email = email.toLowerCase().trim();

    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Please Enter a valid email." });

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({
        message: "Email already exist.",
      });
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      email,
      role,
      password: hashedPassword,
    });

    return res.status(201).send({
      message: "User created sucessfully, please proceed to login.",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
export async function login(req, res) {
  try {
    let { email, password } = req.body;

    const existingUser = await User.findOne({
      email: email.toLowerCase().trim(),
    });

    if (!existingUser)
      return res.status(401).json({
        message: "No account exist with this email address.",
      });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(401).json({ message: "Incorrect Password" });

    const token = jsonwebtoken.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        role: existingUser.role,
      },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "User logged in successfully.",
      data: {
        email: existingUser.email,
        role: existingUser.role,
        id: existingUser._id,
        token: token,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
