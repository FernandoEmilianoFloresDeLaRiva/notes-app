import { LoginUserT } from "../entity/LoginUserT";

export class CreateLoginUserDTO {
  email: string;
  password: string;
  constructor(userRegisterReq: LoginUserT) {
    const { email, password } = userRegisterReq;
    this.email = email;
    this.password = password;
  }
}
