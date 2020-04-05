import { Request, Response } from "express";
import EmailService from "../services/EmailService";
import IUser from "../interfaces/IUser";

var users: IUser[] = [
  {
    username: "user 1",
    email: "user1@gmail.com",
  },
  {
    username: "user 2",
  },
];

class UserController {
  async index(req: Request, res: Response) {
    return res.json(users);
  }

  async store(req: Request, res: Response) {
    const user: IUser = req.body;
    users = [...users, user];

    EmailService.sendMail({
      message: {
        body: "Hello, welcome!",
        subject: "Greetings",
      },
      to: {
        email: user.email || "admin@admin.com",
        username: user.username,
      },
    });

    return res.json(users);
  }
}

export default new UserController();
