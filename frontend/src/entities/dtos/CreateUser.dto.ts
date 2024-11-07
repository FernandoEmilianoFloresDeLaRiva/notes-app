import { CreateUserT } from "../entity/CreateUserT";

export class CreateRegisterUserDTO {
  username: string;
  email: string;
  password: string;
  constructor(userRegisterReq: CreateUserT) {
    const { username, email, password } = userRegisterReq;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
