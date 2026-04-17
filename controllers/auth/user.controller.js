import bcrypt, { hash } from "bcrypt";
import { pool } from "../../db.js";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await pool.query(
    "INSERT INTO users (name, email, password) VALUES ($1,$2,$3) RETURNING*",
    [name, email, hashedPassword]
  )

  return res.json(user.rows[0])

};
