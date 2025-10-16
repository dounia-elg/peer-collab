import { pool } from "../database/db";

export class UserRepo {
  async findUserByEmail(email) {
    const [row] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return row[0];
  }
}
