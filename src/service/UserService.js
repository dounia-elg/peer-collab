import { UserRepo } from "../repo/UserRepo";

export class UserService {
  constructor() {
    this.userRepo = new UserRepo();
  }

  async getUserByEmail(email) {
    const user = await this.userRepo.findUserByEmail(email);
    if (!user) {
      const error = new Error("User with this email not found");
      error.status = 404;
      throw error;
    }
    return user;
  }
}
