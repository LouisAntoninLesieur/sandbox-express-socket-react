import { z } from 'zod';
import bcrypt from 'bcrypt';
import { Users } from '../models/index.js';
import jwt from 'jsonwebtoken';

const signupSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const signup = async (req, res) => {
  const result = signupSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({ error: result.error.message });
  }
  try {
    const { username, email, password } = result.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await Users.create({
      username,
      email,
      password: hashedPassword,
    });
    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    // Generate a JWT token and send it to the client
    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET);
    // Send the token, userId, and username to the client
    res.status(200).json({ token, userId: user.id, username: user.username});

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};