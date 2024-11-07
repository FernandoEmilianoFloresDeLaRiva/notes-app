import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserRepository } from './repository/user.repository';
import { LoginUserDto, CreateUserDto } from './dto';
import { HashedService } from 'src/config/security/services/hashed.service';
import { TokenService } from 'src/config/security/services/token.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(UserRepository) private readonly _userRepository: UserRepository,
    @Inject(HashedService)
    private readonly _hashService: HashedService,
    @Inject(TokenService)
    private readonly _tokenService: TokenService,
  ) {}
  async register(createUserDto: CreateUserDto) {
    try {
      const { email, password } = createUserDto;
      const userExisting = await this._userRepository.findByEmail(email);
      if (userExisting) {
        throw new ConflictException('User already exists');
      }
      const passwordHashed = await this._hashService.hashedPassword(password);
      const reqUserDto: CreateUserDto = {
        ...createUserDto,
        password: passwordHashed,
      };
      const res = await this._userRepository.createUser(reqUserDto);
      return res;
    } catch (error) {
      throw error
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const { email, password } = loginUserDto;
      const existingUser = await this._userRepository.findByEmail(email);
      if (!existingUser) {
        throw new NotFoundException('Invalid login user');
      }
      const isPasswordValid = await this._hashService.comparePassword(
        password,
        existingUser.password,
      );
      if (!isPasswordValid) {
        throw new NotFoundException('Invalid login user');
      }
      const { password: _, ...userRest } = existingUser;
      return {
        user: userRest,
        token: await this._tokenService.sign(userRest),
      };
    } catch (error) {
      throw error
    }
  }
}
