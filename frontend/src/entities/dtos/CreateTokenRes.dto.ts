import { ITokenResponse } from "../entity";

export class CreateTokenResponse {
  token: string;
  user: {
    id: number;
    email: string;
  };
  constructor(tokenRes: ITokenResponse) {
    const { token, user: userReq } = tokenRes;
    const { email, id } = userReq;
    this.token = token;
    this.user = {
      id: id,
      email: email,
    };
  }
}
